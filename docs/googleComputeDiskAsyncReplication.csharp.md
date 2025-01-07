# `googleComputeDiskAsyncReplication` Submodule <a name="`googleComputeDiskAsyncReplication` Submodule" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeDiskAsyncReplication <a name="GoogleComputeDiskAsyncReplication" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication google_compute_disk_async_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskAsyncReplication(Construct Scope, string Id, GoogleComputeDiskAsyncReplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig">GoogleComputeDiskAsyncReplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig">GoogleComputeDiskAsyncReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putSecondaryDisk">PutSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecondaryDisk` <a name="PutSecondaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putSecondaryDisk"></a>

```csharp
private void PutSecondaryDisk(GoogleComputeDiskAsyncReplicationSecondaryDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putSecondaryDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeDiskAsyncReplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDiskAsyncReplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDiskAsyncReplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDiskAsyncReplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDiskAsyncReplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeDiskAsyncReplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeDiskAsyncReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeDiskAsyncReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDisk">SecondaryDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference">GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference">GoogleComputeDiskAsyncReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDiskInput">PrimaryDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDiskInput">SecondaryDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDisk">PrimaryDisk</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SecondaryDisk`<sup>Required</sup> <a name="SecondaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDisk"></a>

```csharp
public GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference SecondaryDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference">GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeouts"></a>

```csharp
public GoogleComputeDiskAsyncReplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference">GoogleComputeDiskAsyncReplicationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrimaryDiskInput`<sup>Optional</sup> <a name="PrimaryDiskInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDiskInput"></a>

```csharp
public string PrimaryDiskInput { get; }
```

- *Type:* string

---

##### `SecondaryDiskInput`<sup>Optional</sup> <a name="SecondaryDiskInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDiskInput"></a>

```csharp
public GoogleComputeDiskAsyncReplicationSecondaryDisk SecondaryDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrimaryDisk`<sup>Required</sup> <a name="PrimaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDisk"></a>

```csharp
public string PrimaryDisk { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeDiskAsyncReplicationConfig <a name="GoogleComputeDiskAsyncReplicationConfig" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskAsyncReplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrimaryDisk,
    GoogleComputeDiskAsyncReplicationSecondaryDisk SecondaryDisk,
    string Id = null,
    GoogleComputeDiskAsyncReplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.primaryDisk">PrimaryDisk</a></code> | <code>string</code> | Primary disk for asynchronous replication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.secondaryDisk">SecondaryDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | secondary_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#id GoogleComputeDiskAsyncReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrimaryDisk`<sup>Required</sup> <a name="PrimaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.primaryDisk"></a>

```csharp
public string PrimaryDisk { get; set; }
```

- *Type:* string

Primary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#primary_disk GoogleComputeDiskAsyncReplication#primary_disk}

---

##### `SecondaryDisk`<sup>Required</sup> <a name="SecondaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.secondaryDisk"></a>

```csharp
public GoogleComputeDiskAsyncReplicationSecondaryDisk SecondaryDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

secondary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#secondary_disk GoogleComputeDiskAsyncReplication#secondary_disk}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#id GoogleComputeDiskAsyncReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.timeouts"></a>

```csharp
public GoogleComputeDiskAsyncReplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#timeouts GoogleComputeDiskAsyncReplication#timeouts}

---

### GoogleComputeDiskAsyncReplicationSecondaryDisk <a name="GoogleComputeDiskAsyncReplicationSecondaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskAsyncReplicationSecondaryDisk {
    string Disk
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk.property.disk">Disk</a></code> | <code>string</code> | Secondary disk for asynchronous replication. |

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk.property.disk"></a>

```csharp
public string Disk { get; set; }
```

- *Type:* string

Secondary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#disk GoogleComputeDiskAsyncReplication#disk}

---

### GoogleComputeDiskAsyncReplicationTimeouts <a name="GoogleComputeDiskAsyncReplicationTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskAsyncReplicationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#create GoogleComputeDiskAsyncReplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#delete GoogleComputeDiskAsyncReplication#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#create GoogleComputeDiskAsyncReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_disk_async_replication#delete GoogleComputeDiskAsyncReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference <a name="GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput">DiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk">Disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput"></a>

```csharp
public string DiskInput { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk"></a>

```csharp
public string Disk { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeDiskAsyncReplicationSecondaryDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

---


### GoogleComputeDiskAsyncReplicationTimeoutsOutputReference <a name="GoogleComputeDiskAsyncReplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskAsyncReplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



