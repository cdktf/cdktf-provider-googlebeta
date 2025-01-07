# `googleVertexAiDeploymentResourcePool` Submodule <a name="`googleVertexAiDeploymentResourcePool` Submodule" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiDeploymentResourcePool <a name="GoogleVertexAiDeploymentResourcePool" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePool(Construct Scope, string Id, GoogleVertexAiDeploymentResourcePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig">GoogleVertexAiDeploymentResourcePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig">GoogleVertexAiDeploymentResourcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources">PutDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources">ResetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDedicatedResources` <a name="PutDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources"></a>

```csharp
private void PutDedicatedResources(GoogleVertexAiDeploymentResourcePoolDedicatedResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiDeploymentResourcePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---

##### `ResetDedicatedResources` <a name="ResetDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources"></a>

```csharp
private void ResetDedicatedResources()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiDeploymentResourcePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiDeploymentResourcePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiDeploymentResourcePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiDeploymentResourcePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiDeploymentResourcePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiDeploymentResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiDeploymentResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput">DedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DedicatedResources`<sup>Required</sup> <a name="DedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference DedicatedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a>

---

##### `DedicatedResourcesInput`<sup>Optional</sup> <a name="DedicatedResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResources DedicatedResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiDeploymentResourcePoolConfig <a name="GoogleVertexAiDeploymentResourcePoolConfig" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleVertexAiDeploymentResourcePoolDedicatedResources DedicatedResources = null,
    string Id = null,
    string Project = null,
    string Region = null,
    GoogleVertexAiDeploymentResourcePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name">Name</a></code> | <code>string</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region">Region</a></code> | <code>string</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#name GoogleVertexAiDeploymentResourcePool#name}

---

##### `DedicatedResources`<sup>Optional</sup> <a name="DedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResources DedicatedResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#dedicated_resources GoogleVertexAiDeploymentResourcePool#dedicated_resources}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#region GoogleVertexAiDeploymentResourcePool#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#timeouts GoogleVertexAiDeploymentResourcePool#timeouts}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResources <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResources {
    GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec MachineSpec,
    double MinReplicaCount,
    object AutoscalingMetricSpecs = null,
    double MaxReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code>object</code> | autoscaling_metric_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_spec GoogleVertexAiDeploymentResourcePool#machine_spec}

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; set; }
```

- *Type:* double

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#min_replica_count GoogleVertexAiDeploymentResourcePool#min_replica_count}

---

##### `AutoscalingMetricSpecs`<sup>Optional</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs"></a>

```csharp
public object AutoscalingMetricSpecs { get; set; }
```

- *Type:* object

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#autoscaling_metric_specs GoogleVertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; set; }
```

- *Type:* double

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#max_replica_count GoogleVertexAiDeploymentResourcePool#max_replica_count}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs {
    string MetricName,
    double Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName">MetricName</a></code> | <code>string</code> | The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target">Target</a></code> | <code>double</code> | The target resource utilization in percentage (1% - 100%) for the given metric; |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#metric_name GoogleVertexAiDeploymentResourcePool#metric_name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target"></a>

```csharp
public double Target { get; set; }
```

- *Type:* double

The target resource utilization in percentage (1% - 100%) for the given metric;

once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#target GoogleVertexAiDeploymentResourcePool#target}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec {
    double AcceleratorCount = null,
    string AcceleratorType = null,
    string MachineType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types). |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_count GoogleVertexAiDeploymentResourcePool#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_type GoogleVertexAiDeploymentResourcePool#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_type GoogleVertexAiDeploymentResourcePool#machine_type}

---

### GoogleVertexAiDeploymentResourcePoolTimeouts <a name="GoogleVertexAiDeploymentResourcePoolTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```csharp
private GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput">TargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput"></a>

```csharp
public double TargetInput { get; }
```

- *Type:* double

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs">PutAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs">ResetAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingMetricSpecs` <a name="PutAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs"></a>

```csharp
private void PutAutoscalingMetricSpecs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs.parameter.value"></a>

- *Type:* object

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec"></a>

```csharp
private void PutMachineSpec(GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `ResetAutoscalingMetricSpecs` <a name="ResetAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs"></a>

```csharp
private void ResetAutoscalingMetricSpecs()
```

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```csharp
private void ResetMaxReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput">AutoscalingMetricSpecsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingMetricSpecs`<sup>Required</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList AutoscalingMetricSpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a>

---

##### `AutoscalingMetricSpecsInput`<sup>Optional</sup> <a name="AutoscalingMetricSpecsInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput"></a>

```csharp
public object AutoscalingMetricSpecsInput { get; }
```

- *Type:* object

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```csharp
public double MaxReplicaCountInput { get; }
```

- *Type:* double

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```csharp
public double MinReplicaCountInput { get; }
```

- *Type:* double

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; }
```

- *Type:* double

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiDeploymentResourcePoolDedicatedResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---


### GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



