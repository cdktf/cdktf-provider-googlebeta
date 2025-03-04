# `googleNetappStoragePool` Submodule <a name="`googleNetappStoragePool` Submodule" id="@cdktf/provider-google-beta.googleNetappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappStoragePool <a name="GoogleNetappStoragePool" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappStoragePool(Construct Scope, string Id, GoogleNetappStoragePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig">GoogleNetappStoragePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig">GoogleNetappStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetAllowAutoTiering">ResetAllowAutoTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetKmsConfig">ResetKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLdapEnabled">ResetLdapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetReplicaZone">ResetReplicaZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetappStoragePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetAllowAutoTiering` <a name="ResetAllowAutoTiering" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetAllowAutoTiering"></a>

```csharp
private void ResetAllowAutoTiering()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsConfig` <a name="ResetKmsConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetKmsConfig"></a>

```csharp
private void ResetKmsConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLdapEnabled` <a name="ResetLdapEnabled" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLdapEnabled"></a>

```csharp
private void ResetLdapEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReplicaZone` <a name="ResetReplicaZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetReplicaZone"></a>

```csharp
private void ResetReplicaZone()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappStoragePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappStoragePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappStoragePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappStoragePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetappStoragePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappStoragePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference">GoogleNetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCapacityGib">VolumeCapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCount">VolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTieringInput">AllowAutoTieringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGibInput">CapacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfigInput">KmsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabledInput">LdapEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZoneInput">ReplicaZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectory">ActiveDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTiering">AllowAutoTiering</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGib">CapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfig">KmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabled">LdapEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZone">ReplicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeouts"></a>

```csharp
public GoogleNetappStoragePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference">GoogleNetappStoragePoolTimeoutsOutputReference</a>

---

##### `VolumeCapacityGib`<sup>Required</sup> <a name="VolumeCapacityGib" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCapacityGib"></a>

```csharp
public string VolumeCapacityGib { get; }
```

- *Type:* string

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCount"></a>

```csharp
public double VolumeCount { get; }
```

- *Type:* double

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectoryInput"></a>

```csharp
public string ActiveDirectoryInput { get; }
```

- *Type:* string

---

##### `AllowAutoTieringInput`<sup>Optional</sup> <a name="AllowAutoTieringInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTieringInput"></a>

```csharp
public object AllowAutoTieringInput { get; }
```

- *Type:* object

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGibInput"></a>

```csharp
public string CapacityGibInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsConfigInput`<sup>Optional</sup> <a name="KmsConfigInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfigInput"></a>

```csharp
public string KmsConfigInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LdapEnabledInput`<sup>Optional</sup> <a name="LdapEnabledInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabledInput"></a>

```csharp
public object LdapEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicaZoneInput`<sup>Optional</sup> <a name="ReplicaZoneInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZoneInput"></a>

```csharp
public string ReplicaZoneInput { get; }
```

- *Type:* string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevelInput"></a>

```csharp
public string ServiceLevelInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectory"></a>

```csharp
public string ActiveDirectory { get; }
```

- *Type:* string

---

##### `AllowAutoTiering`<sup>Required</sup> <a name="AllowAutoTiering" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTiering"></a>

```csharp
public object AllowAutoTiering { get; }
```

- *Type:* object

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGib"></a>

```csharp
public string CapacityGib { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfig"></a>

```csharp
public string KmsConfig { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabled"></a>

```csharp
public object LdapEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReplicaZone`<sup>Required</sup> <a name="ReplicaZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZone"></a>

```csharp
public string ReplicaZone { get; }
```

- *Type:* string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappStoragePoolConfig <a name="GoogleNetappStoragePoolConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappStoragePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CapacityGib,
    string Location,
    string Name,
    string Network,
    string ServiceLevel,
    string ActiveDirectory = null,
    object AllowAutoTiering = null,
    string Description = null,
    string Id = null,
    string KmsConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object LdapEnabled = null,
    string Project = null,
    string ReplicaZone = null,
    GoogleNetappStoragePoolTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.capacityGib">CapacityGib</a></code> | <code>string</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.location">Location</a></code> | <code>string</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.network">Network</a></code> | <code>string</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.activeDirectory">ActiveDirectory</a></code> | <code>string</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.allowAutoTiering">AllowAutoTiering</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#id GoogleNetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.kmsConfig">KmsConfig</a></code> | <code>string</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.ldapEnabled">LdapEnabled</a></code> | <code>object</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#project GoogleNetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.replicaZone">ReplicaZone</a></code> | <code>string</code> | Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.zone">Zone</a></code> | <code>string</code> | Specifies the active zone for regional Flex pools. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.capacityGib"></a>

```csharp
public string CapacityGib { get; set; }
```

- *Type:* string

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#capacity_gib GoogleNetappStoragePool#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#location GoogleNetappStoragePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#name GoogleNetappStoragePool#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#network GoogleNetappStoragePool#network}

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; set; }
```

- *Type:* string

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#service_level GoogleNetappStoragePool#service_level}

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.activeDirectory"></a>

```csharp
public string ActiveDirectory { get; set; }
```

- *Type:* string

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#active_directory GoogleNetappStoragePool#active_directory}

---

##### `AllowAutoTiering`<sup>Optional</sup> <a name="AllowAutoTiering" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.allowAutoTiering"></a>

```csharp
public object AllowAutoTiering { get; set; }
```

- *Type:* object

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#allow_auto_tiering GoogleNetappStoragePool#allow_auto_tiering}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#description GoogleNetappStoragePool#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#id GoogleNetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsConfig`<sup>Optional</sup> <a name="KmsConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.kmsConfig"></a>

```csharp
public string KmsConfig { get; set; }
```

- *Type:* string

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#kms_config GoogleNetappStoragePool#kms_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#labels GoogleNetappStoragePool#labels}

---

##### `LdapEnabled`<sup>Optional</sup> <a name="LdapEnabled" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.ldapEnabled"></a>

```csharp
public object LdapEnabled { get; set; }
```

- *Type:* object

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#ldap_enabled GoogleNetappStoragePool#ldap_enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#project GoogleNetappStoragePool#project}.

---

##### `ReplicaZone`<sup>Optional</sup> <a name="ReplicaZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.replicaZone"></a>

```csharp
public string ReplicaZone { get; set; }
```

- *Type:* string

Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#replica_zone GoogleNetappStoragePool#replica_zone}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.timeouts"></a>

```csharp
public GoogleNetappStoragePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#timeouts GoogleNetappStoragePool#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Specifies the active zone for regional Flex pools.

'zone' and 'replica_zone' values can be swapped to initiate a
[zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
If you want to create a zonal Flex pool, specify a zone name for 'location' and omit 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#zone GoogleNetappStoragePool#zone}

---

### GoogleNetappStoragePoolTimeouts <a name="GoogleNetappStoragePoolTimeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappStoragePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#create GoogleNetappStoragePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#delete GoogleNetappStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#update GoogleNetappStoragePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#create GoogleNetappStoragePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#delete GoogleNetappStoragePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_storage_pool#update GoogleNetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappStoragePoolTimeoutsOutputReference <a name="GoogleNetappStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappStoragePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



