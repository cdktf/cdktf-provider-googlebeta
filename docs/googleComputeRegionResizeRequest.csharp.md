# `googleComputeRegionResizeRequest` Submodule <a name="`googleComputeRegionResizeRequest` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionResizeRequest <a name="GoogleComputeRegionResizeRequest" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request google_compute_region_resize_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequest(Construct Scope, string Id, GoogleComputeRegionResizeRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig">GoogleComputeRegionResizeRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig">GoogleComputeRegionResizeRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.putRequestedRunDuration">PutRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetRequestedRunDuration">ResetRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequestedRunDuration` <a name="PutRequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.putRequestedRunDuration"></a>

```csharp
private void PutRequestedRunDuration(GoogleComputeRegionResizeRequestRequestedRunDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.putRequestedRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRegionResizeRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts">GoogleComputeRegionResizeRequestTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequestedRunDuration` <a name="ResetRequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetRequestedRunDuration"></a>

```csharp
private void ResetRequestedRunDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionResizeRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionResizeRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionResizeRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionResizeRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionResizeRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRegionResizeRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionResizeRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionResizeRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionResizeRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.requestedRunDuration">RequestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference">GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList">GoogleComputeRegionResizeRequestStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference">GoogleComputeRegionResizeRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.instanceGroupManagerInput">InstanceGroupManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.requestedRunDurationInput">RequestedRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.resizeByInput">ResizeByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.resizeBy">ResizeBy</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `RequestedRunDuration`<sup>Required</sup> <a name="RequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.requestedRunDuration"></a>

```csharp
public GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference RequestedRunDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference">GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.status"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList">GoogleComputeRegionResizeRequestStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.timeouts"></a>

```csharp
public GoogleComputeRegionResizeRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference">GoogleComputeRegionResizeRequestTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceGroupManagerInput`<sup>Optional</sup> <a name="InstanceGroupManagerInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.instanceGroupManagerInput"></a>

```csharp
public string InstanceGroupManagerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RequestedRunDurationInput`<sup>Optional</sup> <a name="RequestedRunDurationInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.requestedRunDurationInput"></a>

```csharp
public GoogleComputeRegionResizeRequestRequestedRunDuration RequestedRunDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a>

---

##### `ResizeByInput`<sup>Optional</sup> <a name="ResizeByInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.resizeByInput"></a>

```csharp
public double ResizeByInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.instanceGroupManager"></a>

```csharp
public string InstanceGroupManager { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResizeBy`<sup>Required</sup> <a name="ResizeBy" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.resizeBy"></a>

```csharp
public double ResizeBy { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionResizeRequestConfig <a name="GoogleComputeRegionResizeRequestConfig" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceGroupManager,
    string Name,
    string Region,
    double ResizeBy,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleComputeRegionResizeRequestRequestedRunDuration RequestedRunDuration = null,
    GoogleComputeRegionResizeRequestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>string</code> | The reference of the regional instance group manager this ResizeRequest is a part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.name">Name</a></code> | <code>string</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.region">Region</a></code> | <code>string</code> | The reference of the compute region scoping this request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.resizeBy">ResizeBy</a></code> | <code>double</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resize-request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#id GoogleComputeRegionResizeRequest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#project GoogleComputeRegionResizeRequest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.requestedRunDuration">RequestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts">GoogleComputeRegionResizeRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.instanceGroupManager"></a>

```csharp
public string InstanceGroupManager { get; set; }
```

- *Type:* string

The reference of the regional instance group manager this ResizeRequest is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#instance_group_manager GoogleComputeRegionResizeRequest#instance_group_manager}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#name GoogleComputeRegionResizeRequest#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The reference of the compute region scoping this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#region GoogleComputeRegionResizeRequest#region}

---

##### `ResizeBy`<sup>Required</sup> <a name="ResizeBy" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.resizeBy"></a>

```csharp
public double ResizeBy { get; set; }
```

- *Type:* double

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#resize_by GoogleComputeRegionResizeRequest#resize_by}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#description GoogleComputeRegionResizeRequest#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#id GoogleComputeRegionResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#project GoogleComputeRegionResizeRequest#project}.

---

##### `RequestedRunDuration`<sup>Optional</sup> <a name="RequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.requestedRunDuration"></a>

```csharp
public GoogleComputeRegionResizeRequestRequestedRunDuration RequestedRunDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#requested_run_duration GoogleComputeRegionResizeRequest#requested_run_duration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestConfig.property.timeouts"></a>

```csharp
public GoogleComputeRegionResizeRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts">GoogleComputeRegionResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#timeouts GoogleComputeRegionResizeRequest#timeouts}

---

### GoogleComputeRegionResizeRequestRequestedRunDuration <a name="GoogleComputeRegionResizeRequestRequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestRequestedRunDuration {
    string Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration.property.seconds">Seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration.property.seconds"></a>

```csharp
public string Seconds { get; set; }
```

- *Type:* string

Span of time at a resolution of a second.

Must be from 600 to 604800 inclusive. Note: minimum and maximum allowed range for requestedRunDuration is 10 minutes (600 seconds) and 7 days(604800 seconds) correspondingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#seconds GoogleComputeRegionResizeRequest#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#nanos GoogleComputeRegionResizeRequest#nanos}

---

### GoogleComputeRegionResizeRequestStatus <a name="GoogleComputeRegionResizeRequestStatus" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatus {

};
```


### GoogleComputeRegionResizeRequestStatusError <a name="GoogleComputeRegionResizeRequestStatusError" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusError {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrors <a name="GoogleComputeRegionResizeRequestStatusErrorErrors" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrors {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage {

};
```


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttempt <a name="GoogleComputeRegionResizeRequestStatusLastAttempt" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttempt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttempt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttempt {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptError <a name="GoogleComputeRegionResizeRequestStatusLastAttemptError" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptError {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage {

};
```


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo {

};
```


### GoogleComputeRegionResizeRequestTimeouts <a name="GoogleComputeRegionResizeRequestTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#create GoogleComputeRegionResizeRequest#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#delete GoogleComputeRegionResizeRequest#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#create GoogleComputeRegionResizeRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_region_resize_request#delete GoogleComputeRegionResizeRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference <a name="GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.secondsInput"></a>

```csharp
public string SecondsInput { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestRequestedRunDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestRequestedRunDuration">GoogleComputeRegionResizeRequestRequestedRunDuration</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">Metadatas</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Metadatas`<sup>Required</sup> <a name="Metadatas" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```csharp
public StringMap Metadatas { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelp</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help">Help</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage">LocalizedMessage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo">QuotaInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `Help`<sup>Required</sup> <a name="Help" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList Help { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsHelpList</a>

---

##### `LocalizedMessage`<sup>Required</sup> <a name="LocalizedMessage" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList LocalizedMessage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `QuotaInfo`<sup>Required</sup> <a name="QuotaInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList QuotaInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetails</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">Dimensions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">FutureLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">LimitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```csharp
public StringMap Dimensions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FutureLimit`<sup>Required</sup> <a name="FutureLimit" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```csharp
public double FutureLimit { get; }
```

- *Type:* double

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```csharp
public string LimitName { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```csharp
public string RolloutStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a>

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsList <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrors">GoogleComputeRegionResizeRequestStatusErrorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.errorDetails"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList ErrorDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList">GoogleComputeRegionResizeRequestStatusErrorErrorsErrorDetailsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrors">GoogleComputeRegionResizeRequestStatusErrorErrors</a>

---


### GoogleComputeRegionResizeRequestStatusErrorList <a name="GoogleComputeRegionResizeRequestStatusErrorList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusErrorOutputReference <a name="GoogleComputeRegionResizeRequestStatusErrorOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList">GoogleComputeRegionResizeRequestStatusErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusError">GoogleComputeRegionResizeRequestStatusError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.errors"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorErrorsList">GoogleComputeRegionResizeRequestStatusErrorErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusError">GoogleComputeRegionResizeRequestStatusError</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">Metadatas</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Metadatas`<sup>Required</sup> <a name="Metadatas" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```csharp
public StringMap Metadatas { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help">Help</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage">LocalizedMessage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo">QuotaInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `Help`<sup>Required</sup> <a name="Help" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList Help { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a>

---

##### `LocalizedMessage`<sup>Required</sup> <a name="LocalizedMessage" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList LocalizedMessage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `QuotaInfo`<sup>Required</sup> <a name="QuotaInfo" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList QuotaInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">Dimensions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">FutureLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">LimitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```csharp
public StringMap Dimensions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FutureLimit`<sup>Required</sup> <a name="FutureLimit" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```csharp
public double FutureLimit { get; }
```

- *Type:* double

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitName`<sup>Required</sup> <a name="LimitName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```csharp
public string LimitName { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```csharp
public string RolloutStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList ErrorDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrors</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptError">GoogleComputeRegionResizeRequestStatusLastAttemptError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.errors"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptError">GoogleComputeRegionResizeRequestStatusLastAttemptError</a>

---


### GoogleComputeRegionResizeRequestStatusLastAttemptList <a name="GoogleComputeRegionResizeRequestStatusLastAttemptList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference <a name="GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttempt">GoogleComputeRegionResizeRequestStatusLastAttempt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.error"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptErrorList">GoogleComputeRegionResizeRequestStatusLastAttemptErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttempt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttempt">GoogleComputeRegionResizeRequestStatusLastAttempt</a>

---


### GoogleComputeRegionResizeRequestStatusList <a name="GoogleComputeRegionResizeRequestStatusList" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.get"></a>

```csharp
private GoogleComputeRegionResizeRequestStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionResizeRequestStatusOutputReference <a name="GoogleComputeRegionResizeRequestStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList">GoogleComputeRegionResizeRequestStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.lastAttempt">LastAttempt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList">GoogleComputeRegionResizeRequestStatusLastAttemptList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatus">GoogleComputeRegionResizeRequestStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.error"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusErrorList">GoogleComputeRegionResizeRequestStatusErrorList</a>

---

##### `LastAttempt`<sup>Required</sup> <a name="LastAttempt" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.lastAttempt"></a>

```csharp
public GoogleComputeRegionResizeRequestStatusLastAttemptList LastAttempt { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusLastAttemptList">GoogleComputeRegionResizeRequestStatusLastAttemptList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionResizeRequestStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestStatus">GoogleComputeRegionResizeRequestStatus</a>

---


### GoogleComputeRegionResizeRequestTimeoutsOutputReference <a name="GoogleComputeRegionResizeRequestTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionResizeRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionResizeRequest.GoogleComputeRegionResizeRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



