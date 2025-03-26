# `googleComputeAutoscaler` Submodule <a name="`googleComputeAutoscaler` Submodule" id="@cdktf/provider-google-beta.googleComputeAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeAutoscaler <a name="GoogleComputeAutoscaler" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler google_compute_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscaler(Construct Scope, string Id, GoogleComputeAutoscalerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig">GoogleComputeAutoscalerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig">GoogleComputeAutoscalerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putAutoscalingPolicy"></a>

```csharp
private void PutAutoscalingPolicy(GoogleComputeAutoscalerAutoscalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeAutoscalerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeAutoscaler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeAutoscaler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeAutoscaler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeAutoscaler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeAutoscaler resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeAutoscaler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference">GoogleComputeAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference">GoogleComputeAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicy"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyOutputReference AutoscalingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference">GoogleComputeAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeouts"></a>

```csharp
public GoogleComputeAutoscalerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference">GoogleComputeAutoscalerTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicyInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicy AutoscalingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeAutoscalerAutoscalingPolicy <a name="GoogleComputeAutoscalerAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicy {
    double MaxReplicas,
    double MinReplicas,
    double CooldownPeriod = null,
    GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization CpuUtilization = null,
    GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilization = null,
    object Metric = null,
    string Mode = null,
    GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl ScaleDownControl = null,
    GoogleComputeAutoscalerAutoscalingPolicyScaleInControl ScaleInControl = null,
    object ScalingSchedules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.minReplicas">MinReplicas</a></code> | <code>double</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod">CooldownPeriod</a></code> | <code>double</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.mode">Mode</a></code> | <code>string</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleDownControl">ScaleDownControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a></code> | scale_down_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scalingSchedules">ScalingSchedules</a></code> | <code>object</code> | scaling_schedules block. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#max_replicas GoogleComputeAutoscaler#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```csharp
public double MinReplicas { get; set; }
```

- *Type:* double

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#min_replicas GoogleComputeAutoscaler#min_replicas}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```csharp
public double CooldownPeriod { get; set; }
```

- *Type:* double

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#cooldown_period GoogleComputeAutoscaler#cooldown_period}

---

##### `CpuUtilization`<sup>Optional</sup> <a name="CpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization CpuUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#cpu_utilization GoogleComputeAutoscaler#cpu_utilization}

---

##### `LoadBalancingUtilization`<sup>Optional</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#load_balancing_utilization GoogleComputeAutoscaler#load_balancing_utilization}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#metric GoogleComputeAutoscaler#metric}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#mode GoogleComputeAutoscaler#mode}

---

##### `ScaleDownControl`<sup>Optional</sup> <a name="ScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleDownControl"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl ScaleDownControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

scale_down_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#scale_down_control GoogleComputeAutoscaler#scale_down_control}

---

##### `ScaleInControl`<sup>Optional</sup> <a name="ScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControl ScaleInControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#scale_in_control GoogleComputeAutoscaler#scale_in_control}

---

##### `ScalingSchedules`<sup>Optional</sup> <a name="ScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```csharp
public object ScalingSchedules { get; set; }
```

- *Type:* object

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#scaling_schedules GoogleComputeAutoscaler#scaling_schedules}

---

### GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization <a name="GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization {
    double Target,
    string PredictiveMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target">Target</a></code> | <code>double</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">PredictiveMethod</a></code> | <code>string</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `PredictiveMethod`<sup>Optional</sup> <a name="PredictiveMethod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```csharp
public string PredictiveMethod { get; set; }
```

- *Type:* string

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#predictive_method GoogleComputeAutoscaler#predictive_method}

---

### GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization {
    double Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">Target</a></code> | <code>double</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

### GoogleComputeAutoscalerAutoscalingPolicyMetric <a name="GoogleComputeAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyMetric {
    string Name,
    string Filter = null,
    double SingleInstanceAssignment = null,
    double Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.name">Name</a></code> | <code>string</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.filter">Filter</a></code> | <code>string</code> | A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment">SingleInstanceAssignment</a></code> | <code>double</code> | If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.target">Target</a></code> | <code>double</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.type">Type</a></code> | <code>string</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data.

You can only use the AND operator for joining selectors.
You can only use direct equality comparison operator (=) without
any functions for each selector.
You can specify the metric in both the filter string and in the
metric field. However, if specified in both places, the metric must
be identical.

The monitored resource type determines what kind of values are
expected for the metric. If it is a gce_instance, the autoscaler
expects the metric to include a separate TimeSeries for each
instance in a group. In such a case, you cannot filter on resource
labels.

If the resource type is any other value, the autoscaler expects
this metric to contain values that apply to the entire autoscaled
instance group and resource label filtering can be performed to
point autoscaler at the correct TimeSeries to scale upon.
This is called a per-group metric for the purpose of autoscaling.

If not specified, the type defaults to gce_instance.

You should provide a filter that is selective enough to pick just
one TimeSeries for the autoscaled group or for each of the instances
(if you are using gce_instance resource type). If multiple
TimeSeries are returned upon the query execution, the autoscaler
will sum their respective values to obtain its scaling value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#filter GoogleComputeAutoscaler#filter}

---

##### `SingleInstanceAssignment`<sup>Optional</sup> <a name="SingleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment"></a>

```csharp
public double SingleInstanceAssignment { get; set; }
```

- *Type:* double

If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group.

The autoscaler will keep the number of instances proportional to the
value of this metric, the metric itself should not change value due
to group resizing.

For example, a good metric to use with the target is
'pubsub.googleapis.com/subscription/num_undelivered_messages'
or a custom metric exporting the total number of requests coming to
your instances.

A bad example would be a metric exporting an average or median
latency, since this value can't include a chunk assignable to a
single instance, it could be better used with utilization_target
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#single_instance_assignment GoogleComputeAutoscaler#single_instance_assignment}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#type GoogleComputeAutoscaler#type}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl {
    GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas MaxScaledDownReplicas = null,
    double TimeWindowSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.maxScaledDownReplicas">MaxScaledDownReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | max_scaled_down_replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `MaxScaledDownReplicas`<sup>Optional</sup> <a name="MaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.maxScaledDownReplicas"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas MaxScaledDownReplicas { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

max_scaled_down_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#max_scaled_down_replicas GoogleComputeAutoscaler#max_scaled_down_replicas}

---

##### `TimeWindowSec`<sup>Optional</sup> <a name="TimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; set; }
```

- *Type:* double

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#time_window_sec GoogleComputeAutoscaler#time_window_sec}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.fixed">Fixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.percent">Percent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#fixed GoogleComputeAutoscaler#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#percent GoogleComputeAutoscaler#percent}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleInControl <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleInControl {
    GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicas = null,
    double TimeWindowSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `MaxScaledInReplicas`<sup>Optional</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicas { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#max_scaled_in_replicas GoogleComputeAutoscaler#max_scaled_in_replicas}

---

##### `TimeWindowSec`<sup>Optional</sup> <a name="TimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; set; }
```

- *Type:* double

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#time_window_sec GoogleComputeAutoscaler#time_window_sec}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">Fixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">Percent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#fixed GoogleComputeAutoscaler#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#percent GoogleComputeAutoscaler#percent}

---

### GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules <a name="GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules {
    double DurationSec,
    double MinRequiredReplicas,
    string Name,
    string Schedule,
    string Description = null,
    object Disabled = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">DurationSec</a></code> | <code>double</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>double</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">Schedule</a></code> | <code>string</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description">Description</a></code> | <code>string</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">Disabled</a></code> | <code>object</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone to be used when interpreting the schedule. |

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```csharp
public double DurationSec { get; set; }
```

- *Type:* double

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#duration_sec GoogleComputeAutoscaler#duration_sec}

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```csharp
public double MinRequiredReplicas { get; set; }
```

- *Type:* double

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#min_required_replicas GoogleComputeAutoscaler#min_required_replicas}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#schedule GoogleComputeAutoscaler#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#description GoogleComputeAutoscaler#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#disabled GoogleComputeAutoscaler#disabled}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#time_zone GoogleComputeAutoscaler#time_zone}

---

### GoogleComputeAutoscalerConfig <a name="GoogleComputeAutoscalerConfig" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleComputeAutoscalerAutoscalingPolicy AutoscalingPolicy,
    string Name,
    string Target,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleComputeAutoscalerTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.target">Target</a></code> | <code>string</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#id GoogleComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#project GoogleComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.zone">Zone</a></code> | <code>string</code> | URL of the zone where the instance group resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.autoscalingPolicy"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicy AutoscalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#autoscaling_policy GoogleComputeAutoscaler#autoscaling_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#description GoogleComputeAutoscaler#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#id GoogleComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#project GoogleComputeAutoscaler#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.timeouts"></a>

```csharp
public GoogleComputeAutoscalerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#timeouts GoogleComputeAutoscaler#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#zone GoogleComputeAutoscaler#zone}

---

### GoogleComputeAutoscalerTimeouts <a name="GoogleComputeAutoscalerTimeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#create GoogleComputeAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#delete GoogleComputeAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#update GoogleComputeAutoscaler#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#create GoogleComputeAutoscaler#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#delete GoogleComputeAutoscaler#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_autoscaler#update GoogleComputeAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">ResetPredictiveMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictiveMethod` <a name="ResetPredictiveMethod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```csharp
private void ResetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">PredictiveMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">PredictiveMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictiveMethodInput`<sup>Optional</sup> <a name="PredictiveMethodInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```csharp
public string PredictiveMethodInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `PredictiveMethod`<sup>Required</sup> <a name="PredictiveMethod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```csharp
public string PredictiveMethod { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyMetricList <a name="GoogleComputeAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.get"></a>

```csharp
private GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment">ResetSingleInstanceAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetSingleInstanceAssignment` <a name="ResetSingleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment"></a>

```csharp
private void ResetSingleInstanceAssignment()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput">SingleInstanceAssignmentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment">SingleInstanceAssignment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SingleInstanceAssignmentInput`<sup>Optional</sup> <a name="SingleInstanceAssignmentInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput"></a>

```csharp
public double SingleInstanceAssignmentInput { get; }
```

- *Type:* double

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SingleInstanceAssignment`<sup>Required</sup> <a name="SingleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment"></a>

```csharp
public double SingleInstanceAssignment { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeAutoscalerAutoscalingPolicyOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">PutLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl">PutScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">PutScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">PutScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">ResetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">ResetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleDownControl">ResetScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">ResetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">ResetScalingSchedules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```csharp
private void PutCpuUtilization(GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `PutLoadBalancingUtilization` <a name="PutLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```csharp
private void PutLoadBalancingUtilization(GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutScaleDownControl` <a name="PutScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl"></a>

```csharp
private void PutScaleDownControl(GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

---

##### `PutScaleInControl` <a name="PutScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```csharp
private void PutScaleInControl(GoogleComputeAutoscalerAutoscalingPolicyScaleInControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `PutScalingSchedules` <a name="PutScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```csharp
private void PutScalingSchedules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* object

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```csharp
private void ResetCooldownPeriod()
```

##### `ResetCpuUtilization` <a name="ResetCpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```csharp
private void ResetCpuUtilization()
```

##### `ResetLoadBalancingUtilization` <a name="ResetLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```csharp
private void ResetLoadBalancingUtilization()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetScaleDownControl` <a name="ResetScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleDownControl"></a>

```csharp
private void ResetScaleDownControl()
```

##### `ResetScaleInControl` <a name="ResetScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```csharp
private void ResetScaleInControl()
```

##### `ResetScalingSchedules` <a name="ResetScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```csharp
private void ResetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList">GoogleComputeAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControl">ScaleDownControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">ScalingSchedules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">LoadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControlInput">ScaleDownControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">ScaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">ScalingSchedulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">MinReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference CpuUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `LoadBalancingUtilization`<sup>Required</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference LoadBalancingUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList">GoogleComputeAutoscalerAutoscalingPolicyMetricList</a>

---

##### `ScaleDownControl`<sup>Required</sup> <a name="ScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControl"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference ScaleDownControl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference</a>

---

##### `ScaleInControl`<sup>Required</sup> <a name="ScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference ScaleInControl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `ScalingSchedules`<sup>Required</sup> <a name="ScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList ScalingSchedules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```csharp
public double CooldownPeriodInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization CpuUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `LoadBalancingUtilizationInput`<sup>Optional</sup> <a name="LoadBalancingUtilizationInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization LoadBalancingUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```csharp
public double MinReplicasInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ScaleDownControlInput`<sup>Optional</sup> <a name="ScaleDownControlInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControlInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl ScaleDownControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

---

##### `ScaleInControlInput`<sup>Optional</sup> <a name="ScaleInControlInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControl ScaleInControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `ScalingSchedulesInput`<sup>Optional</sup> <a name="ScalingSchedulesInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```csharp
public object ScalingSchedulesInput { get; }
```

- *Type:* object

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```csharp
public double CooldownPeriod { get; }
```

- *Type:* double

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```csharp
public double MinReplicas { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas">PutMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetMaxScaledDownReplicas">ResetMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetTimeWindowSec">ResetTimeWindowSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxScaledDownReplicas` <a name="PutMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas"></a>

```csharp
private void PutMaxScaledDownReplicas(GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---

##### `ResetMaxScaledDownReplicas` <a name="ResetMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetMaxScaledDownReplicas"></a>

```csharp
private void ResetMaxScaledDownReplicas()
```

##### `ResetTimeWindowSec` <a name="ResetTimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetTimeWindowSec"></a>

```csharp
private void ResetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicas">MaxScaledDownReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicasInput">MaxScaledDownReplicasInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSecInput">TimeWindowSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaledDownReplicas`<sup>Required</sup> <a name="MaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicas"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference MaxScaledDownReplicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference</a>

---

##### `MaxScaledDownReplicasInput`<sup>Optional</sup> <a name="MaxScaledDownReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicasInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas MaxScaledDownReplicasInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---

##### `TimeWindowSecInput`<sup>Optional</sup> <a name="TimeWindowSecInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSecInput"></a>

```csharp
public double TimeWindowSecInput { get; }
```

- *Type:* double

---

##### `TimeWindowSec`<sup>Required</sup> <a name="TimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">PutMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">ResetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">ResetTimeWindowSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxScaledInReplicas` <a name="PutMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```csharp
private void PutMaxScaledInReplicas(GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `ResetMaxScaledInReplicas` <a name="ResetMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```csharp
private void ResetMaxScaledInReplicas()
```

##### `ResetTimeWindowSec` <a name="ResetTimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```csharp
private void ResetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">MaxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">TimeWindowSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">TimeWindowSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaledInReplicas`<sup>Required</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference MaxScaledInReplicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `MaxScaledInReplicasInput`<sup>Optional</sup> <a name="MaxScaledInReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas MaxScaledInReplicasInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `TimeWindowSecInput`<sup>Optional</sup> <a name="TimeWindowSecInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```csharp
public double TimeWindowSecInput { get; }
```

- *Type:* double

---

##### `TimeWindowSec`<sup>Required</sup> <a name="TimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```csharp
public double TimeWindowSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList <a name="GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```csharp
private GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">DurationSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">MinRequiredReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">DurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DurationSecInput`<sup>Optional</sup> <a name="DurationSecInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```csharp
public double DurationSecInput { get; }
```

- *Type:* double

---

##### `MinRequiredReplicasInput`<sup>Optional</sup> <a name="MinRequiredReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```csharp
public double MinRequiredReplicasInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```csharp
public double DurationSec { get; }
```

- *Type:* double

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```csharp
public double MinRequiredReplicas { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeAutoscalerTimeoutsOutputReference <a name="GoogleComputeAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeAutoscalerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



