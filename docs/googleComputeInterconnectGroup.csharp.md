# `googleComputeInterconnectGroup` Submodule <a name="`googleComputeInterconnectGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectGroup <a name="GoogleComputeInterconnectGroup" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group google_compute_interconnect_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroup(Construct Scope, string Id, GoogleComputeInterconnectGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig">GoogleComputeInterconnectGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig">GoogleComputeInterconnectGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent">PutIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects">PutInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects">ResetInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIntent` <a name="PutIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent"></a>

```csharp
private void PutIntent(GoogleComputeInterconnectGroupIntent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `PutInterconnects` <a name="PutInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects"></a>

```csharp
private void PutInterconnects(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeInterconnectGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterconnects` <a name="ResetInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects"></a>

```csharp
private void ResetInterconnects()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInterconnectGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInterconnectGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInterconnectGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInterconnectGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInterconnectGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInterconnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured">Configured</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects">Interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure">PhysicalStructure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput">IntentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput">InterconnectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured"></a>

```csharp
public GoogleComputeInterconnectGroupConfiguredList Configured { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent"></a>

```csharp
public GoogleComputeInterconnectGroupIntentOutputReference Intent { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a>

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects"></a>

```csharp
public GoogleComputeInterconnectGroupInterconnectsList Interconnects { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a>

---

##### `PhysicalStructure`<sup>Required</sup> <a name="PhysicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureList PhysicalStructure { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts"></a>

```csharp
public GoogleComputeInterconnectGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput"></a>

```csharp
public GoogleComputeInterconnectGroupIntent IntentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `InterconnectsInput`<sup>Optional</sup> <a name="InterconnectsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput"></a>

```csharp
public object InterconnectsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectGroupConfig <a name="GoogleComputeInterconnectGroupConfig" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleComputeInterconnectGroupIntent Intent,
    string Name,
    string Description = null,
    string Id = null,
    object Interconnects = null,
    string Project = null,
    GoogleComputeInterconnectGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects">Interconnects</a></code> | <code>object</code> | interconnects block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent"></a>

```csharp
public GoogleComputeInterconnectGroupIntent Intent { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#intent GoogleComputeInterconnectGroup#intent}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#description GoogleComputeInterconnectGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnects`<sup>Optional</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects"></a>

```csharp
public object Interconnects { get; set; }
```

- *Type:* object

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#interconnects GoogleComputeInterconnectGroup#interconnects}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts"></a>

```csharp
public GoogleComputeInterconnectGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#timeouts GoogleComputeInterconnectGroup#timeouts}

---

### GoogleComputeInterconnectGroupConfigured <a name="GoogleComputeInterconnectGroupConfigured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfigured {

};
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapability <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredTopologyCapability {

};
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers {

};
```


### GoogleComputeInterconnectGroupIntent <a name="GoogleComputeInterconnectGroupIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupIntent {
    string TopologyCapability = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability">TopologyCapability</a></code> | <code>string</code> | The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs. |

---

##### `TopologyCapability`<sup>Optional</sup> <a name="TopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability"></a>

```csharp
public string TopologyCapability { get; set; }
```

- *Type:* string

The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs.

Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#topology_capability GoogleComputeInterconnectGroup#topology_capability}

---

### GoogleComputeInterconnectGroupInterconnects <a name="GoogleComputeInterconnectGroupInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupInterconnects {
    string Name,
    string Interconnect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect">Interconnect</a></code> | <code>string</code> | The URL of an Interconnect in this group. All Interconnects in the group are unique. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect"></a>

```csharp
public string Interconnect { get; set; }
```

- *Type:* string

The URL of an Interconnect in this group. All Interconnects in the group are unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#interconnect GoogleComputeInterconnectGroup#interconnect}

---

### GoogleComputeInterconnectGroupPhysicalStructure <a name="GoogleComputeInterconnectGroupPhysicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructure {

};
```


### GoogleComputeInterconnectGroupPhysicalStructureMetros <a name="GoogleComputeInterconnectGroupPhysicalStructureMetros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetros {

};
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities {

};
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones {

};
```


### GoogleComputeInterconnectGroupTimeouts <a name="GoogleComputeInterconnectGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectGroupConfiguredList <a name="GoogleComputeInterconnectGroupConfiguredList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get"></a>

```csharp
private GoogleComputeInterconnectGroupConfiguredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupConfiguredOutputReference <a name="GoogleComputeInterconnectGroupConfiguredOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability">TopologyCapability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopologyCapability`<sup>Required</sup> <a name="TopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability"></a>

```csharp
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList TopologyCapability { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupConfigured InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get"></a>

```csharp
private GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType">BlockerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink">DocumentationLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation">Explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities">Facilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects">Interconnects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros">Metros</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockerType`<sup>Required</sup> <a name="BlockerType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType"></a>

```csharp
public string BlockerType { get; }
```

- *Type:* string

---

##### `DocumentationLink`<sup>Required</sup> <a name="DocumentationLink" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink"></a>

```csharp
public string DocumentationLink { get; }
```

- *Type:* string

---

##### `Explanation`<sup>Required</sup> <a name="Explanation" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation"></a>

```csharp
public string Explanation { get; }
```

- *Type:* string

---

##### `Facilities`<sup>Required</sup> <a name="Facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities"></a>

```csharp
public string[] Facilities { get; }
```

- *Type:* string[]

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects"></a>

```csharp
public string[] Interconnects { get; }
```

- *Type:* string[]

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros"></a>

```csharp
public string[] Metros { get; }
```

- *Type:* string[]

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get"></a>

```csharp
private GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers">IntendedCapabilityBlockers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla">SupportedSla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntendedCapabilityBlockers`<sup>Required</sup> <a name="IntendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers"></a>

```csharp
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList IntendedCapabilityBlockers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a>

---

##### `SupportedSla`<sup>Required</sup> <a name="SupportedSla" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla"></a>

```csharp
public string SupportedSla { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupConfiguredTopologyCapability InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a>

---


### GoogleComputeInterconnectGroupIntentOutputReference <a name="GoogleComputeInterconnectGroupIntentOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupIntentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability">ResetTopologyCapability</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopologyCapability` <a name="ResetTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability"></a>

```csharp
private void ResetTopologyCapability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput">TopologyCapabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability">TopologyCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopologyCapabilityInput`<sup>Optional</sup> <a name="TopologyCapabilityInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput"></a>

```csharp
public string TopologyCapabilityInput { get; }
```

- *Type:* string

---

##### `TopologyCapability`<sup>Required</sup> <a name="TopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability"></a>

```csharp
public string TopologyCapability { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupIntent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---


### GoogleComputeInterconnectGroupInterconnectsList <a name="GoogleComputeInterconnectGroupInterconnectsList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupInterconnectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get"></a>

```csharp
private GoogleComputeInterconnectGroupInterconnectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInterconnectGroupInterconnectsOutputReference <a name="GoogleComputeInterconnectGroupInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupInterconnectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect">ResetInterconnect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect"></a>

```csharp
private void ResetInterconnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput">InterconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect">Interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput"></a>

```csharp
public string InterconnectInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect"></a>

```csharp
public string Interconnect { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInterconnectGroupPhysicalStructureList <a name="GoogleComputeInterconnectGroupPhysicalStructureList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get"></a>

```csharp
private GoogleComputeInterconnectGroupPhysicalStructureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get"></a>

```csharp
private GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility">Facility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones">Zones</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Facility`<sup>Required</sup> <a name="Facility" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility"></a>

```csharp
public string Facility { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList Zones { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get"></a>

```csharp
private GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects">Interconnects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects"></a>

```csharp
public string[] Interconnects { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get"></a>

```csharp
private GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities">Facilities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro">Metro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Facilities`<sup>Required</sup> <a name="Facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList Facilities { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a>

---

##### `Metro`<sup>Required</sup> <a name="Metro" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro"></a>

```csharp
public string Metro { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureMetros InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupPhysicalStructureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros">Metros</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructureMetrosList Metros { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInterconnectGroupPhysicalStructure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a>

---


### GoogleComputeInterconnectGroupTimeoutsOutputReference <a name="GoogleComputeInterconnectGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInterconnectGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



