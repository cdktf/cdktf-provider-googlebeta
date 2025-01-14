# `googleBigtableInstance` Submodule <a name="`googleBigtableInstance` Submodule" id="@cdktf/provider-google-beta.googleBigtableInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableInstance <a name="GoogleBigtableInstance" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance google_bigtable_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstance(Construct Scope, string Id, GoogleBigtableInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig">GoogleBigtableInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig">GoogleBigtableInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.putCluster"></a>

```csharp
private void PutCluster(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.putCluster.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigtableInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts">GoogleBigtableInstanceTimeouts</a>

---

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigtableInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigtableInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigtableInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList">GoogleBigtableInstanceClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference">GoogleBigtableInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.clusterInput">ClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.cluster"></a>

```csharp
public GoogleBigtableInstanceClusterList Cluster { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList">GoogleBigtableInstanceClusterList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.timeouts"></a>

```csharp
public GoogleBigtableInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference">GoogleBigtableInstanceTimeoutsOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.clusterInput"></a>

```csharp
public object ClusterInput { get; }
```

- *Type:* object

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableInstanceCluster <a name="GoogleBigtableInstanceCluster" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceCluster {
    string ClusterId,
    GoogleBigtableInstanceClusterAutoscalingConfig AutoscalingConfig = null,
    string KmsKeyName = null,
    double NumNodes = null,
    string StorageType = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the Cloud Bigtable cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.numNodes">NumNodes</a></code> | <code>double</code> | The number of nodes in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.storageType">StorageType</a></code> | <code>string</code> | The storage type to use. One of "SSD" or "HDD". Defaults to "SSD". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.zone">Zone</a></code> | <code>string</code> | The zone to create the Cloud Bigtable cluster in. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the Cloud Bigtable cluster.

Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#cluster_id GoogleBigtableInstance#cluster_id}

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.autoscalingConfig"></a>

```csharp
public GoogleBigtableInstanceClusterAutoscalingConfig AutoscalingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#autoscaling_config GoogleBigtableInstance#autoscaling_config}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster.

The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. 3) All clusters within an instance must use the same CMEK key. Values are of the form projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#kms_key_name GoogleBigtableInstance#kms_key_name}

---

##### `NumNodes`<sup>Optional</sup> <a name="NumNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.numNodes"></a>

```csharp
public double NumNodes { get; set; }
```

- *Type:* double

The number of nodes in the cluster.

If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#num_nodes GoogleBigtableInstance#num_nodes}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

The storage type to use. One of "SSD" or "HDD". Defaults to "SSD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#storage_type GoogleBigtableInstance#storage_type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceCluster.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone to create the Cloud Bigtable cluster in.

Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#zone GoogleBigtableInstance#zone}

---

### GoogleBigtableInstanceClusterAutoscalingConfig <a name="GoogleBigtableInstanceClusterAutoscalingConfig" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceClusterAutoscalingConfig {
    double CpuTarget,
    double MaxNodes,
    double MinNodes,
    double StorageTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.cpuTarget">CpuTarget</a></code> | <code>double</code> | The target CPU utilization for autoscaling. Value must be between 10 and 80. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.maxNodes">MaxNodes</a></code> | <code>double</code> | The maximum number of nodes for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.minNodes">MinNodes</a></code> | <code>double</code> | The minimum number of nodes for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.storageTarget">StorageTarget</a></code> | <code>double</code> | The target storage utilization for autoscaling, in GB, for each node in a cluster. |

---

##### `CpuTarget`<sup>Required</sup> <a name="CpuTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.cpuTarget"></a>

```csharp
public double CpuTarget { get; set; }
```

- *Type:* double

The target CPU utilization for autoscaling. Value must be between 10 and 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#cpu_target GoogleBigtableInstance#cpu_target}

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.maxNodes"></a>

```csharp
public double MaxNodes { get; set; }
```

- *Type:* double

The maximum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#max_nodes GoogleBigtableInstance#max_nodes}

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.minNodes"></a>

```csharp
public double MinNodes { get; set; }
```

- *Type:* double

The minimum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#min_nodes GoogleBigtableInstance#min_nodes}

---

##### `StorageTarget`<sup>Optional</sup> <a name="StorageTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig.property.storageTarget"></a>

```csharp
public double StorageTarget { get; set; }
```

- *Type:* double

The target storage utilization for autoscaling, in GB, for each node in a cluster.

This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#storage_target GoogleBigtableInstance#storage_target}

---

### GoogleBigtableInstanceConfig <a name="GoogleBigtableInstanceConfig" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Cluster = null,
    object DeletionProtection = null,
    string DisplayName = null,
    object ForceDestroy = null,
    string Id = null,
    string InstanceType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleBigtableInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.cluster">Cluster</a></code> | <code>object</code> | cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable display name of the Bigtable instance. Defaults to the instance name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | When deleting a BigTable instance, this boolean option will delete all backups within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#id GoogleBigtableInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts">GoogleBigtableInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance.

Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#name GoogleBigtableInstance#name}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.cluster"></a>

```csharp
public object Cluster { get; set; }
```

- *Type:* object

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#cluster GoogleBigtableInstance#cluster}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail.

When the field is set to false, deleting the instance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#deletion_protection GoogleBigtableInstance#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable display name of the Bigtable instance. Defaults to the instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#display_name GoogleBigtableInstance#display_name}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

When deleting a BigTable instance, this boolean option will delete all backups within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#force_destroy GoogleBigtableInstance#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#id GoogleBigtableInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#instance_type GoogleBigtableInstance#instance_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#labels GoogleBigtableInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#project GoogleBigtableInstance#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceConfig.property.timeouts"></a>

```csharp
public GoogleBigtableInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts">GoogleBigtableInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#timeouts GoogleBigtableInstance#timeouts}

---

### GoogleBigtableInstanceTimeouts <a name="GoogleBigtableInstanceTimeouts" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#create GoogleBigtableInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#read GoogleBigtableInstance#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#update GoogleBigtableInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#create GoogleBigtableInstance#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#read GoogleBigtableInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_instance#update GoogleBigtableInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableInstanceClusterAutoscalingConfigOutputReference <a name="GoogleBigtableInstanceClusterAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceClusterAutoscalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget">ResetStorageTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageTarget` <a name="ResetStorageTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget"></a>

```csharp
private void ResetStorageTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput">CpuTargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput">StorageTargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget">CpuTarget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes">MaxNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes">MinNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget">StorageTarget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuTargetInput`<sup>Optional</sup> <a name="CpuTargetInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput"></a>

```csharp
public double CpuTargetInput { get; }
```

- *Type:* double

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput"></a>

```csharp
public double MaxNodesInput { get; }
```

- *Type:* double

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput"></a>

```csharp
public double MinNodesInput { get; }
```

- *Type:* double

---

##### `StorageTargetInput`<sup>Optional</sup> <a name="StorageTargetInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput"></a>

```csharp
public double StorageTargetInput { get; }
```

- *Type:* double

---

##### `CpuTarget`<sup>Required</sup> <a name="CpuTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget"></a>

```csharp
public double CpuTarget { get; }
```

- *Type:* double

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes"></a>

```csharp
public double MaxNodes { get; }
```

- *Type:* double

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes"></a>

```csharp
public double MinNodes { get; }
```

- *Type:* double

---

##### `StorageTarget`<sup>Required</sup> <a name="StorageTarget" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget"></a>

```csharp
public double StorageTarget { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBigtableInstanceClusterAutoscalingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a>

---


### GoogleBigtableInstanceClusterList <a name="GoogleBigtableInstanceClusterList" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceClusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.get"></a>

```csharp
private GoogleBigtableInstanceClusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigtableInstanceClusterOutputReference <a name="GoogleBigtableInstanceClusterOutputReference" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetNumNodes">ResetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.putAutoscalingConfig"></a>

```csharp
private void PutAutoscalingConfig(GoogleBigtableInstanceClusterAutoscalingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetAutoscalingConfig"></a>

```csharp
private void ResetAutoscalingConfig()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetNumNodes` <a name="ResetNumNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetNumNodes"></a>

```csharp
private void ResetNumNodes()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference">GoogleBigtableInstanceClusterAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.numNodesInput">NumNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.numNodes">NumNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.autoscalingConfig"></a>

```csharp
public GoogleBigtableInstanceClusterAutoscalingConfigOutputReference AutoscalingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfigOutputReference">GoogleBigtableInstanceClusterAutoscalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.autoscalingConfigInput"></a>

```csharp
public GoogleBigtableInstanceClusterAutoscalingConfig AutoscalingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterAutoscalingConfig">GoogleBigtableInstanceClusterAutoscalingConfig</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `NumNodesInput`<sup>Optional</sup> <a name="NumNodesInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.numNodesInput"></a>

```csharp
public double NumNodesInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `NumNodes`<sup>Required</sup> <a name="NumNodes" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.numNodes"></a>

```csharp
public double NumNodes { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceClusterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigtableInstanceTimeoutsOutputReference <a name="GoogleBigtableInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableInstance.GoogleBigtableInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



