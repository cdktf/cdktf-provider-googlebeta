# `googleBigtableAuthorizedView` Submodule <a name="`googleBigtableAuthorizedView` Submodule" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableAuthorizedView <a name="GoogleBigtableAuthorizedView" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view google_bigtable_authorized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedView(Construct Scope, string Id, GoogleBigtableAuthorizedViewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig">GoogleBigtableAuthorizedViewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig">GoogleBigtableAuthorizedViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putSubsetView">PutSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetSubsetView">ResetSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubsetView` <a name="PutSubsetView" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putSubsetView"></a>

```csharp
private void PutSubsetView(GoogleBigtableAuthorizedViewSubsetView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putSubsetView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigtableAuthorizedViewTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts">GoogleBigtableAuthorizedViewTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSubsetView` <a name="ResetSubsetView" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetSubsetView"></a>

```csharp
private void ResetSubsetView()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableAuthorizedView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAuthorizedView.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAuthorizedView.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAuthorizedView.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAuthorizedView.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigtableAuthorizedView resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigtableAuthorizedView to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigtableAuthorizedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableAuthorizedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetView">SubsetView</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference">GoogleBigtableAuthorizedViewSubsetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference">GoogleBigtableAuthorizedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetViewInput">SubsetViewInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SubsetView`<sup>Required</sup> <a name="SubsetView" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetView"></a>

```csharp
public GoogleBigtableAuthorizedViewSubsetViewOutputReference SubsetView { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference">GoogleBigtableAuthorizedViewSubsetViewOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeouts"></a>

```csharp
public GoogleBigtableAuthorizedViewTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference">GoogleBigtableAuthorizedViewTimeoutsOutputReference</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtectionInput"></a>

```csharp
public string DeletionProtectionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SubsetViewInput`<sup>Optional</sup> <a name="SubsetViewInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetViewInput"></a>

```csharp
public GoogleBigtableAuthorizedViewSubsetView SubsetViewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableAuthorizedViewConfig <a name="GoogleBigtableAuthorizedViewConfig" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceName,
    string Name,
    string TableName,
    string DeletionProtection = null,
    string Id = null,
    string Project = null,
    GoogleBigtableAuthorizedViewSubsetView SubsetView = null,
    GoogleBigtableAuthorizedViewTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.name">Name</a></code> | <code>string</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.tableName">TableName</a></code> | <code>string</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#id GoogleBigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.subsetView">SubsetView</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts">GoogleBigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#instance_name GoogleBigtableAuthorizedView#instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#name GoogleBigtableAuthorizedView#name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#table_name GoogleBigtableAuthorizedView#table_name}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; set; }
```

- *Type:* string

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#deletion_protection GoogleBigtableAuthorizedView#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#id GoogleBigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#project GoogleBigtableAuthorizedView#project}

---

##### `SubsetView`<sup>Optional</sup> <a name="SubsetView" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.subsetView"></a>

```csharp
public GoogleBigtableAuthorizedViewSubsetView SubsetView { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#subset_view GoogleBigtableAuthorizedView#subset_view}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.timeouts"></a>

```csharp
public GoogleBigtableAuthorizedViewTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts">GoogleBigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#timeouts GoogleBigtableAuthorizedView#timeouts}

---

### GoogleBigtableAuthorizedViewSubsetView <a name="GoogleBigtableAuthorizedViewSubsetView" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewSubsetView {
    object FamilySubsets = null,
    string[] RowPrefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.familySubsets">FamilySubsets</a></code> | <code>object</code> | family_subsets block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.rowPrefixes">RowPrefixes</a></code> | <code>string[]</code> | Base64-encoded row prefixes to be included in the authorized view. |

---

##### `FamilySubsets`<sup>Optional</sup> <a name="FamilySubsets" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.familySubsets"></a>

```csharp
public object FamilySubsets { get; set; }
```

- *Type:* object

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#family_subsets GoogleBigtableAuthorizedView#family_subsets}

---

##### `RowPrefixes`<sup>Optional</sup> <a name="RowPrefixes" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.rowPrefixes"></a>

```csharp
public string[] RowPrefixes { get; set; }
```

- *Type:* string[]

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#row_prefixes GoogleBigtableAuthorizedView#row_prefixes}

---

### GoogleBigtableAuthorizedViewSubsetViewFamilySubsets <a name="GoogleBigtableAuthorizedViewSubsetViewFamilySubsets" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewSubsetViewFamilySubsets {
    string FamilyName,
    string[] QualifierPrefixes = null,
    string[] Qualifiers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName">FamilyName</a></code> | <code>string</code> | Name of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes">QualifierPrefixes</a></code> | <code>string[]</code> | Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers">Qualifiers</a></code> | <code>string[]</code> | Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view. |

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName"></a>

```csharp
public string FamilyName { get; set; }
```

- *Type:* string

Name of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#family_name GoogleBigtableAuthorizedView#family_name}

---

##### `QualifierPrefixes`<sup>Optional</sup> <a name="QualifierPrefixes" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes"></a>

```csharp
public string[] QualifierPrefixes { get; set; }
```

- *Type:* string[]

Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view.

Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#qualifier_prefixes GoogleBigtableAuthorizedView#qualifier_prefixes}

---

##### `Qualifiers`<sup>Optional</sup> <a name="Qualifiers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers"></a>

```csharp
public string[] Qualifiers { get; set; }
```

- *Type:* string[]

Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#qualifiers GoogleBigtableAuthorizedView#qualifiers}

---

### GoogleBigtableAuthorizedViewTimeouts <a name="GoogleBigtableAuthorizedViewTimeouts" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#create GoogleBigtableAuthorizedView#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#update GoogleBigtableAuthorizedView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#create GoogleBigtableAuthorizedView#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_bigtable_authorized_view#update GoogleBigtableAuthorizedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList <a name="GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.get"></a>

```csharp
private GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference <a name="GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes">ResetQualifierPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers">ResetQualifiers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQualifierPrefixes` <a name="ResetQualifierPrefixes" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes"></a>

```csharp
private void ResetQualifierPrefixes()
```

##### `ResetQualifiers` <a name="ResetQualifiers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers"></a>

```csharp
private void ResetQualifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput">QualifierPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput">QualifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes">QualifierPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers">Qualifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput"></a>

```csharp
public string FamilyNameInput { get; }
```

- *Type:* string

---

##### `QualifierPrefixesInput`<sup>Optional</sup> <a name="QualifierPrefixesInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput"></a>

```csharp
public string[] QualifierPrefixesInput { get; }
```

- *Type:* string[]

---

##### `QualifiersInput`<sup>Optional</sup> <a name="QualifiersInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput"></a>

```csharp
public string[] QualifiersInput { get; }
```

- *Type:* string[]

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `QualifierPrefixes`<sup>Required</sup> <a name="QualifierPrefixes" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes"></a>

```csharp
public string[] QualifierPrefixes { get; }
```

- *Type:* string[]

---

##### `Qualifiers`<sup>Required</sup> <a name="Qualifiers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers"></a>

```csharp
public string[] Qualifiers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigtableAuthorizedViewSubsetViewOutputReference <a name="GoogleBigtableAuthorizedViewSubsetViewOutputReference" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewSubsetViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets">PutFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets">ResetFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes">ResetRowPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFamilySubsets` <a name="PutFamilySubsets" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets"></a>

```csharp
private void PutFamilySubsets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets.parameter.value"></a>

- *Type:* object

---

##### `ResetFamilySubsets` <a name="ResetFamilySubsets" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets"></a>

```csharp
private void ResetFamilySubsets()
```

##### `ResetRowPrefixes` <a name="ResetRowPrefixes" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes"></a>

```csharp
private void ResetRowPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets">FamilySubsets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList">GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput">FamilySubsetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput">RowPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes">RowPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilySubsets`<sup>Required</sup> <a name="FamilySubsets" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets"></a>

```csharp
public GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList FamilySubsets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList">GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList</a>

---

##### `FamilySubsetsInput`<sup>Optional</sup> <a name="FamilySubsetsInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput"></a>

```csharp
public object FamilySubsetsInput { get; }
```

- *Type:* object

---

##### `RowPrefixesInput`<sup>Optional</sup> <a name="RowPrefixesInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput"></a>

```csharp
public string[] RowPrefixesInput { get; }
```

- *Type:* string[]

---

##### `RowPrefixes`<sup>Required</sup> <a name="RowPrefixes" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes"></a>

```csharp
public string[] RowPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.internalValue"></a>

```csharp
public GoogleBigtableAuthorizedViewSubsetView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

---


### GoogleBigtableAuthorizedViewTimeoutsOutputReference <a name="GoogleBigtableAuthorizedViewTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAuthorizedViewTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



