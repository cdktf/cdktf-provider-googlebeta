# `googleComputeStoragePool` Submodule <a name="`googleComputeStoragePool` Submodule" id="@cdktf/provider-google-beta.googleComputeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeStoragePool <a name="GoogleComputeStoragePool" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePool(Construct Scope, string Id, GoogleComputeStoragePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig">GoogleComputeStoragePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig">GoogleComputeStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType">ResetCapacityProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType">ResetPerformanceProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops">ResetPoolProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeStoragePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---

##### `ResetCapacityProvisioningType` <a name="ResetCapacityProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType"></a>

```csharp
private void ResetCapacityProvisioningType()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPerformanceProvisioningType` <a name="ResetPerformanceProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType"></a>

```csharp
private void ResetPerformanceProvisioningType()
```

##### `ResetPoolProvisionedIops` <a name="ResetPoolProvisionedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops"></a>

```csharp
private void ResetPoolProvisionedIops()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeStoragePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeStoragePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeStoragePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeStoragePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeStoragePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus">ResourceStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput">CapacityProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput">PerformanceProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput">PoolProvisionedCapacityGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput">PoolProvisionedIopsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput">PoolProvisionedThroughputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput">StoragePoolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType">CapacityProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType">PerformanceProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb">PoolProvisionedCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops">PoolProvisionedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput">PoolProvisionedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType">StoragePoolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus"></a>

```csharp
public GoogleComputeStoragePoolResourceStatusList ResourceStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status"></a>

```csharp
public GoogleComputeStoragePoolStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts"></a>

```csharp
public GoogleComputeStoragePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a>

---

##### `CapacityProvisioningTypeInput`<sup>Optional</sup> <a name="CapacityProvisioningTypeInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput"></a>

```csharp
public string CapacityProvisioningTypeInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PerformanceProvisioningTypeInput`<sup>Optional</sup> <a name="PerformanceProvisioningTypeInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput"></a>

```csharp
public string PerformanceProvisioningTypeInput { get; }
```

- *Type:* string

---

##### `PoolProvisionedCapacityGbInput`<sup>Optional</sup> <a name="PoolProvisionedCapacityGbInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput"></a>

```csharp
public string PoolProvisionedCapacityGbInput { get; }
```

- *Type:* string

---

##### `PoolProvisionedIopsInput`<sup>Optional</sup> <a name="PoolProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput"></a>

```csharp
public string PoolProvisionedIopsInput { get; }
```

- *Type:* string

---

##### `PoolProvisionedThroughputInput`<sup>Optional</sup> <a name="PoolProvisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput"></a>

```csharp
public string PoolProvisionedThroughputInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StoragePoolTypeInput`<sup>Optional</sup> <a name="StoragePoolTypeInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput"></a>

```csharp
public string StoragePoolTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `CapacityProvisioningType`<sup>Required</sup> <a name="CapacityProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType"></a>

```csharp
public string CapacityProvisioningType { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PerformanceProvisioningType`<sup>Required</sup> <a name="PerformanceProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType"></a>

```csharp
public string PerformanceProvisioningType { get; }
```

- *Type:* string

---

##### `PoolProvisionedCapacityGb`<sup>Required</sup> <a name="PoolProvisionedCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```csharp
public string PoolProvisionedCapacityGb { get; }
```

- *Type:* string

---

##### `PoolProvisionedIops`<sup>Required</sup> <a name="PoolProvisionedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops"></a>

```csharp
public string PoolProvisionedIops { get; }
```

- *Type:* string

---

##### `PoolProvisionedThroughput`<sup>Required</sup> <a name="PoolProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput"></a>

```csharp
public string PoolProvisionedThroughput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `StoragePoolType`<sup>Required</sup> <a name="StoragePoolType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType"></a>

```csharp
public string StoragePoolType { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeStoragePoolConfig <a name="GoogleComputeStoragePoolConfig" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PoolProvisionedCapacityGb,
    string PoolProvisionedThroughput,
    string StoragePoolType,
    string CapacityProvisioningType = null,
    object DeletionProtection = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string PerformanceProvisioningType = null,
    string PoolProvisionedIops = null,
    string Project = null,
    GoogleComputeStoragePoolTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb">PoolProvisionedCapacityGb</a></code> | <code>string</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput">PoolProvisionedThroughput</a></code> | <code>string</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType">StoragePoolType</a></code> | <code>string</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType">CapacityProvisioningType</a></code> | <code>string</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description">Description</a></code> | <code>string</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType">PerformanceProvisioningType</a></code> | <code>string</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops">PoolProvisionedIops</a></code> | <code>string</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the storage pool resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}

---

##### `PoolProvisionedCapacityGb`<sup>Required</sup> <a name="PoolProvisionedCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb"></a>

```csharp
public string PoolProvisionedCapacityGb { get; set; }
```

- *Type:* string

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `PoolProvisionedThroughput`<sup>Required</sup> <a name="PoolProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput"></a>

```csharp
public string PoolProvisionedThroughput { get; set; }
```

- *Type:* string

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}

---

##### `StoragePoolType`<sup>Required</sup> <a name="StoragePoolType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType"></a>

```csharp
public string StoragePoolType { get; set; }
```

- *Type:* string

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}

---

##### `CapacityProvisioningType`<sup>Optional</sup> <a name="CapacityProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType"></a>

```csharp
public string CapacityProvisioningType { get; set; }
```

- *Type:* string

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#labels GoogleComputeStoragePool#labels}

---

##### `PerformanceProvisioningType`<sup>Optional</sup> <a name="PerformanceProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType"></a>

```csharp
public string PerformanceProvisioningType { get; set; }
```

- *Type:* string

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}

---

##### `PoolProvisionedIops`<sup>Optional</sup> <a name="PoolProvisionedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops"></a>

```csharp
public string PoolProvisionedIops { get; set; }
```

- *Type:* string

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts"></a>

```csharp
public GoogleComputeStoragePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}

---

### GoogleComputeStoragePoolResourceStatus <a name="GoogleComputeStoragePoolResourceStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolResourceStatus {

};
```


### GoogleComputeStoragePoolStatus <a name="GoogleComputeStoragePoolStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolStatus {

};
```


### GoogleComputeStoragePoolTimeouts <a name="GoogleComputeStoragePoolTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeStoragePoolResourceStatusList <a name="GoogleComputeStoragePoolResourceStatusList" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolResourceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get"></a>

```csharp
private GoogleComputeStoragePoolResourceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeStoragePoolResourceStatusOutputReference <a name="GoogleComputeStoragePoolResourceStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolResourceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount">DiskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">LastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">MaxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">PoolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">PoolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">PoolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">PoolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">TotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">TotalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">TotalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```csharp
public string DiskCount { get; }
```

- *Type:* string

---

##### `LastResizeTimestamp`<sup>Required</sup> <a name="LastResizeTimestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```csharp
public string LastResizeTimestamp { get; }
```

- *Type:* string

---

##### `MaxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="MaxTotalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```csharp
public string MaxTotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `PoolUsedCapacityBytes`<sup>Required</sup> <a name="PoolUsedCapacityBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```csharp
public string PoolUsedCapacityBytes { get; }
```

- *Type:* string

---

##### `PoolUsedIops`<sup>Required</sup> <a name="PoolUsedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```csharp
public string PoolUsedIops { get; }
```

- *Type:* string

---

##### `PoolUsedThroughput`<sup>Required</sup> <a name="PoolUsedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```csharp
public string PoolUsedThroughput { get; }
```

- *Type:* string

---

##### `PoolUserWrittenBytes`<sup>Required</sup> <a name="PoolUserWrittenBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```csharp
public string PoolUserWrittenBytes { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="TotalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```csharp
public string TotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskIops`<sup>Required</sup> <a name="TotalProvisionedDiskIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```csharp
public string TotalProvisionedDiskIops { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskThroughput`<sup>Required</sup> <a name="TotalProvisionedDiskThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```csharp
public string TotalProvisionedDiskThroughput { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeStoragePoolResourceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a>

---


### GoogleComputeStoragePoolStatusList <a name="GoogleComputeStoragePoolStatusList" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get"></a>

```csharp
private GoogleComputeStoragePoolStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeStoragePoolStatusOutputReference <a name="GoogleComputeStoragePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount">DiskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">LastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">MaxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">PoolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops">PoolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">PoolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">PoolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">TotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">TotalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">TotalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```csharp
public string DiskCount { get; }
```

- *Type:* string

---

##### `LastResizeTimestamp`<sup>Required</sup> <a name="LastResizeTimestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```csharp
public string LastResizeTimestamp { get; }
```

- *Type:* string

---

##### `MaxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="MaxTotalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```csharp
public string MaxTotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `PoolUsedCapacityBytes`<sup>Required</sup> <a name="PoolUsedCapacityBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```csharp
public string PoolUsedCapacityBytes { get; }
```

- *Type:* string

---

##### `PoolUsedIops`<sup>Required</sup> <a name="PoolUsedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```csharp
public string PoolUsedIops { get; }
```

- *Type:* string

---

##### `PoolUsedThroughput`<sup>Required</sup> <a name="PoolUsedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```csharp
public string PoolUsedThroughput { get; }
```

- *Type:* string

---

##### `PoolUserWrittenBytes`<sup>Required</sup> <a name="PoolUserWrittenBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```csharp
public string PoolUserWrittenBytes { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="TotalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```csharp
public string TotalProvisionedDiskCapacityGb { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskIops`<sup>Required</sup> <a name="TotalProvisionedDiskIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```csharp
public string TotalProvisionedDiskIops { get; }
```

- *Type:* string

---

##### `TotalProvisionedDiskThroughput`<sup>Required</sup> <a name="TotalProvisionedDiskThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```csharp
public string TotalProvisionedDiskThroughput { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeStoragePoolStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a>

---


### GoogleComputeStoragePoolTimeoutsOutputReference <a name="GoogleComputeStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeStoragePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



