# `googleComputeProjectDefaultNetworkTier` Submodule <a name="`googleComputeProjectDefaultNetworkTier` Submodule" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeProjectDefaultNetworkTier <a name="GoogleComputeProjectDefaultNetworkTier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier google_compute_project_default_network_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeProjectDefaultNetworkTier(Construct Scope, string Id, GoogleComputeProjectDefaultNetworkTierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig">GoogleComputeProjectDefaultNetworkTierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig">GoogleComputeProjectDefaultNetworkTierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeProjectDefaultNetworkTierTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeProjectDefaultNetworkTier resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeProjectDefaultNetworkTier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeProjectDefaultNetworkTier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeProjectDefaultNetworkTier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeProjectDefaultNetworkTier.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeProjectDefaultNetworkTier resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeProjectDefaultNetworkTier to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeProjectDefaultNetworkTier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeProjectDefaultNetworkTier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference">GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeouts"></a>

```csharp
public GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference">GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeProjectDefaultNetworkTierConfig <a name="GoogleComputeProjectDefaultNetworkTierConfig" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeProjectDefaultNetworkTierConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkTier,
    string Id = null,
    string Project = null,
    GoogleComputeProjectDefaultNetworkTierTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#id GoogleComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#network_tier GoogleComputeProjectDefaultNetworkTier#network_tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#id GoogleComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#project GoogleComputeProjectDefaultNetworkTier#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.timeouts"></a>

```csharp
public GoogleComputeProjectDefaultNetworkTierTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#timeouts GoogleComputeProjectDefaultNetworkTier#timeouts}

---

### GoogleComputeProjectDefaultNetworkTierTimeouts <a name="GoogleComputeProjectDefaultNetworkTierTimeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeProjectDefaultNetworkTierTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#create GoogleComputeProjectDefaultNetworkTier#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_project_default_network_tier#create GoogleComputeProjectDefaultNetworkTier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference <a name="GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



