# `googleFirestoreDatabase` Submodule <a name="`googleFirestoreDatabase` Submodule" id="@cdktf/provider-google-beta.googleFirestoreDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreDatabase <a name="GoogleFirestoreDatabase" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database google_firestore_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreDatabase(Construct Scope, string Id, GoogleFirestoreDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig">GoogleFirestoreDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig">GoogleFirestoreDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putCmekConfig">PutCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetAppEngineIntegrationMode">ResetAppEngineIntegrationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetCmekConfig">ResetCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetConcurrencyMode">ResetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeleteProtectionState">ResetDeleteProtectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetPointInTimeRecoveryEnablement">ResetPointInTimeRecoveryEnablement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekConfig` <a name="PutCmekConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putCmekConfig"></a>

```csharp
private void PutCmekConfig(GoogleFirestoreDatabaseCmekConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putCmekConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirestoreDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>

---

##### `ResetAppEngineIntegrationMode` <a name="ResetAppEngineIntegrationMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetAppEngineIntegrationMode"></a>

```csharp
private void ResetAppEngineIntegrationMode()
```

##### `ResetCmekConfig` <a name="ResetCmekConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetCmekConfig"></a>

```csharp
private void ResetCmekConfig()
```

##### `ResetConcurrencyMode` <a name="ResetConcurrencyMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetConcurrencyMode"></a>

```csharp
private void ResetConcurrencyMode()
```

##### `ResetDeleteProtectionState` <a name="ResetDeleteProtectionState" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeleteProtectionState"></a>

```csharp
private void ResetDeleteProtectionState()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPointInTimeRecoveryEnablement` <a name="ResetPointInTimeRecoveryEnablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetPointInTimeRecoveryEnablement"></a>

```csharp
private void ResetPointInTimeRecoveryEnablement()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirestoreDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirestoreDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleFirestoreDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirestoreDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirestoreDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfig">CmekConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference">GoogleFirestoreDatabaseCmekConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.earliestVersionTime">EarliestVersionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference">GoogleFirestoreDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.versionRetentionPeriod">VersionRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationModeInput">AppEngineIntegrationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfigInput">CmekConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyModeInput">ConcurrencyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionStateInput">DeleteProtectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationIdInput">LocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablementInput">PointInTimeRecoveryEnablementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationMode">AppEngineIntegrationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyMode">ConcurrencyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionState">DeleteProtectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationId">LocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablement">PointInTimeRecoveryEnablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CmekConfig`<sup>Required</sup> <a name="CmekConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfig"></a>

```csharp
public GoogleFirestoreDatabaseCmekConfigOutputReference CmekConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference">GoogleFirestoreDatabaseCmekConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EarliestVersionTime`<sup>Required</sup> <a name="EarliestVersionTime" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.earliestVersionTime"></a>

```csharp
public string EarliestVersionTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeouts"></a>

```csharp
public GoogleFirestoreDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference">GoogleFirestoreDatabaseTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VersionRetentionPeriod`<sup>Required</sup> <a name="VersionRetentionPeriod" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.versionRetentionPeriod"></a>

```csharp
public string VersionRetentionPeriod { get; }
```

- *Type:* string

---

##### `AppEngineIntegrationModeInput`<sup>Optional</sup> <a name="AppEngineIntegrationModeInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationModeInput"></a>

```csharp
public string AppEngineIntegrationModeInput { get; }
```

- *Type:* string

---

##### `CmekConfigInput`<sup>Optional</sup> <a name="CmekConfigInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfigInput"></a>

```csharp
public GoogleFirestoreDatabaseCmekConfig CmekConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

---

##### `ConcurrencyModeInput`<sup>Optional</sup> <a name="ConcurrencyModeInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyModeInput"></a>

```csharp
public string ConcurrencyModeInput { get; }
```

- *Type:* string

---

##### `DeleteProtectionStateInput`<sup>Optional</sup> <a name="DeleteProtectionStateInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionStateInput"></a>

```csharp
public string DeleteProtectionStateInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationIdInput"></a>

```csharp
public string LocationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnablementInput`<sup>Optional</sup> <a name="PointInTimeRecoveryEnablementInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablementInput"></a>

```csharp
public string PointInTimeRecoveryEnablementInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AppEngineIntegrationMode`<sup>Required</sup> <a name="AppEngineIntegrationMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationMode"></a>

```csharp
public string AppEngineIntegrationMode { get; }
```

- *Type:* string

---

##### `ConcurrencyMode`<sup>Required</sup> <a name="ConcurrencyMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyMode"></a>

```csharp
public string ConcurrencyMode { get; }
```

- *Type:* string

---

##### `DeleteProtectionState`<sup>Required</sup> <a name="DeleteProtectionState" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionState"></a>

```csharp
public string DeleteProtectionState { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationId"></a>

```csharp
public string LocationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnablement`<sup>Required</sup> <a name="PointInTimeRecoveryEnablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablement"></a>

```csharp
public string PointInTimeRecoveryEnablement { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreDatabaseCmekConfig <a name="GoogleFirestoreDatabaseCmekConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreDatabaseCmekConfig {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The resource ID of a Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The resource ID of a Cloud KMS key.

If set, the database created will
be a Customer-managed Encryption Key (CMEK) database encrypted with
this key. This feature is allowlist only in initial launch.

Only keys in the same location as this database are allowed to be used
for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS
multi-region us. For Firestore's eur3 multi-region, this corresponds to
Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations.

This value should be the KMS key resource ID in the format of
'projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
How to retrieve this resource ID is listed at
https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#kms_key_name GoogleFirestoreDatabase#kms_key_name}

---

### GoogleFirestoreDatabaseConfig <a name="GoogleFirestoreDatabaseConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LocationId,
    string Name,
    string Type,
    string AppEngineIntegrationMode = null,
    GoogleFirestoreDatabaseCmekConfig CmekConfig = null,
    string ConcurrencyMode = null,
    string DeleteProtectionState = null,
    string DeletionPolicy = null,
    string Id = null,
    string PointInTimeRecoveryEnablement = null,
    string Project = null,
    GoogleFirestoreDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.locationId">LocationId</a></code> | <code>string</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.name">Name</a></code> | <code>string</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.type">Type</a></code> | <code>string</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.appEngineIntegrationMode">AppEngineIntegrationMode</a></code> | <code>string</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.cmekConfig">CmekConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | cmek_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.concurrencyMode">ConcurrencyMode</a></code> | <code>string</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deleteProtectionState">DeleteProtectionState</a></code> | <code>string</code> | State of delete protection for the database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Deletion behavior for this database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement">PointInTimeRecoveryEnablement</a></code> | <code>string</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.locationId"></a>

```csharp
public string LocationId { get; set; }
```

- *Type:* string

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#location_id GoogleFirestoreDatabase#location_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#name GoogleFirestoreDatabase#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#type GoogleFirestoreDatabase#type}

---

##### `AppEngineIntegrationMode`<sup>Optional</sup> <a name="AppEngineIntegrationMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.appEngineIntegrationMode"></a>

```csharp
public string AppEngineIntegrationMode { get; set; }
```

- *Type:* string

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#app_engine_integration_mode GoogleFirestoreDatabase#app_engine_integration_mode}

---

##### `CmekConfig`<sup>Optional</sup> <a name="CmekConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.cmekConfig"></a>

```csharp
public GoogleFirestoreDatabaseCmekConfig CmekConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

cmek_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#cmek_config GoogleFirestoreDatabase#cmek_config}

---

##### `ConcurrencyMode`<sup>Optional</sup> <a name="ConcurrencyMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.concurrencyMode"></a>

```csharp
public string ConcurrencyMode { get; set; }
```

- *Type:* string

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#concurrency_mode GoogleFirestoreDatabase#concurrency_mode}

---

##### `DeleteProtectionState`<sup>Optional</sup> <a name="DeleteProtectionState" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deleteProtectionState"></a>

```csharp
public string DeleteProtectionState { get; set; }
```

- *Type:* string

State of delete protection for the database.

When delete protection is enabled, this database cannot be deleted.
The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#delete_protection_state GoogleFirestoreDatabase#delete_protection_state}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Deletion behavior for this database.

If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
The default value is 'ABANDON'.
See also 'delete_protection'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#deletion_policy GoogleFirestoreDatabase#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PointInTimeRecoveryEnablement`<sup>Optional</sup> <a name="PointInTimeRecoveryEnablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement"></a>

```csharp
public string PointInTimeRecoveryEnablement { get; set; }
```

- *Type:* string

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#point_in_time_recovery_enablement GoogleFirestoreDatabase#point_in_time_recovery_enablement}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.timeouts"></a>

```csharp
public GoogleFirestoreDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#timeouts GoogleFirestoreDatabase#timeouts}

---

### GoogleFirestoreDatabaseTimeouts <a name="GoogleFirestoreDatabaseTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreDatabaseCmekConfigOutputReference <a name="GoogleFirestoreDatabaseCmekConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreDatabaseCmekConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion"></a>

```csharp
public string[] ActiveKeyVersion { get; }
```

- *Type:* string[]

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreDatabaseCmekConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

---


### GoogleFirestoreDatabaseTimeoutsOutputReference <a name="GoogleFirestoreDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirestoreDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



