# `googleBackupDrBackupPlan` Submodule <a name="`googleBackupDrBackupPlan` Submodule" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrBackupPlan <a name="GoogleBackupDrBackupPlan" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan google_backup_dr_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlan(Construct Scope, string Id, GoogleBackupDrBackupPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig">GoogleBackupDrBackupPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig">GoogleBackupDrBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.putBackupRules">PutBackupRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupRules` <a name="PutBackupRules" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.putBackupRules"></a>

```csharp
private void PutBackupRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.putBackupRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBackupDrBackupPlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts">GoogleBackupDrBackupPlanTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBackupDrBackupPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBackupDrBackupPlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrBackupPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupRules">BackupRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList">GoogleBackupDrBackupPlanBackupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupVaultServiceAccount">BackupVaultServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference">GoogleBackupDrBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupPlanIdInput">BackupPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupRulesInput">BackupRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupVaultInput">BackupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupPlanId">BackupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupVault">BackupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupRules`<sup>Required</sup> <a name="BackupRules" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupRules"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesList BackupRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList">GoogleBackupDrBackupPlanBackupRulesList</a>

---

##### `BackupVaultServiceAccount`<sup>Required</sup> <a name="BackupVaultServiceAccount" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupVaultServiceAccount"></a>

```csharp
public string BackupVaultServiceAccount { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.timeouts"></a>

```csharp
public GoogleBackupDrBackupPlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference">GoogleBackupDrBackupPlanTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BackupPlanIdInput`<sup>Optional</sup> <a name="BackupPlanIdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupPlanIdInput"></a>

```csharp
public string BackupPlanIdInput { get; }
```

- *Type:* string

---

##### `BackupRulesInput`<sup>Optional</sup> <a name="BackupRulesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupRulesInput"></a>

```csharp
public object BackupRulesInput { get; }
```

- *Type:* object

---

##### `BackupVaultInput`<sup>Optional</sup> <a name="BackupVaultInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupVaultInput"></a>

```csharp
public string BackupVaultInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupPlanId"></a>

```csharp
public string BackupPlanId { get; }
```

- *Type:* string

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.backupVault"></a>

```csharp
public string BackupVault { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrBackupPlanBackupRules <a name="GoogleBackupDrBackupPlanBackupRules" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRules {
    double BackupRetentionDays,
    string RuleId,
    GoogleBackupDrBackupPlanBackupRulesStandardSchedule StandardSchedule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>double</code> | Configures the duration for which backup data will be kept. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.property.ruleId">RuleId</a></code> | <code>string</code> | The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.property.standardSchedule">StandardSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a></code> | standard_schedule block. |

---

##### `BackupRetentionDays`<sup>Required</sup> <a name="BackupRetentionDays" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.property.backupRetentionDays"></a>

```csharp
public double BackupRetentionDays { get; set; }
```

- *Type:* double

Configures the duration for which backup data will be kept.

The value should be greater than or equal to minimum enforced retention of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#backup_retention_days GoogleBackupDrBackupPlan#backup_retention_days}

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#rule_id GoogleBackupDrBackupPlan#rule_id}

---

##### `StandardSchedule`<sup>Required</sup> <a name="StandardSchedule" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRules.property.standardSchedule"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardSchedule StandardSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a>

standard_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#standard_schedule GoogleBackupDrBackupPlan#standard_schedule}

---

### GoogleBackupDrBackupPlanBackupRulesStandardSchedule <a name="GoogleBackupDrBackupPlanBackupRulesStandardSchedule" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesStandardSchedule {
    string RecurrenceType,
    string TimeZone,
    GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow BackupWindow = null,
    double[] DaysOfMonth = null,
    string[] DaysOfWeek = null,
    double HourlyFrequency = null,
    string[] Months = null,
    GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth WeekDayOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone to be used when interpreting the schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.backupWindow">BackupWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | backup_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | Specifies days of months like 1, 5, or 14 on which jobs will run. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Specifies days of week like MONDAY or TUESDAY, on which jobs will run. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.hourlyFrequency">HourlyFrequency</a></code> | <code>double</code> | Specifies frequency for hourly backups. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.months">Months</a></code> | <code>string[]</code> | Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; set; }
```

- *Type:* string

RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#recurrence_type GoogleBackupDrBackupPlan#recurrence_type}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone to be used when interpreting the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#time_zone GoogleBackupDrBackupPlan#time_zone}

---

##### `BackupWindow`<sup>Optional</sup> <a name="BackupWindow" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.backupWindow"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow BackupWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

backup_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#backup_window GoogleBackupDrBackupPlan#backup_window}

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; set; }
```

- *Type:* double[]

Specifies days of months like 1, 5, or 14 on which jobs will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#days_of_month GoogleBackupDrBackupPlan#days_of_month}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Specifies days of week like MONDAY or TUESDAY, on which jobs will run.

This is required for 'recurrence_type', 'WEEKLY' and is not applicable otherwise. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#days_of_week GoogleBackupDrBackupPlan#days_of_week}

---

##### `HourlyFrequency`<sup>Optional</sup> <a name="HourlyFrequency" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.hourlyFrequency"></a>

```csharp
public double HourlyFrequency { get; set; }
```

- *Type:* double

Specifies frequency for hourly backups.

An hourly frequency of 2 means jobs will run every 2 hours from start time till end time defined.
This is required for 'recurrence_type', 'HOURLY' and is not applicable otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#hourly_frequency GoogleBackupDrBackupPlan#hourly_frequency}

---

##### `Months`<sup>Optional</sup> <a name="Months" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.months"></a>

```csharp
public string[] Months { get; set; }
```

- *Type:* string[]

Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#months GoogleBackupDrBackupPlan#months}

---

##### `WeekDayOfMonth`<sup>Optional</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule.property.weekDayOfMonth"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth WeekDayOfMonth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#week_day_of_month GoogleBackupDrBackupPlan#week_day_of_month}

---

### GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow <a name="GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow {
    double StartHourOfDay,
    double EndHourOfDay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.startHourOfDay">StartHourOfDay</a></code> | <code>double</code> | The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.endHourOfDay">EndHourOfDay</a></code> | <code>double</code> | The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00. |

---

##### `StartHourOfDay`<sup>Required</sup> <a name="StartHourOfDay" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.startHourOfDay"></a>

```csharp
public double StartHourOfDay { get; set; }
```

- *Type:* double

The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#start_hour_of_day GoogleBackupDrBackupPlan#start_hour_of_day}

---

##### `EndHourOfDay`<sup>Optional</sup> <a name="EndHourOfDay" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.endHourOfDay"></a>

```csharp
public double EndHourOfDay { get; set; }
```

- *Type:* double

The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00.

The end hour of the day should be greater than the start

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#end_hour_of_day GoogleBackupDrBackupPlan#end_hour_of_day}

---

### GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth <a name="GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth {
    string DayOfWeek,
    string WeekOfMonth
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.weekOfMonth">WeekOfMonth</a></code> | <code>string</code> | WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"]. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#day_of_week GoogleBackupDrBackupPlan#day_of_week}

---

##### `WeekOfMonth`<sup>Required</sup> <a name="WeekOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.weekOfMonth"></a>

```csharp
public string WeekOfMonth { get; set; }
```

- *Type:* string

WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#week_of_month GoogleBackupDrBackupPlan#week_of_month}

---

### GoogleBackupDrBackupPlanConfig <a name="GoogleBackupDrBackupPlanConfig" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupPlanId,
    object BackupRules,
    string BackupVault,
    string Location,
    string ResourceType,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleBackupDrBackupPlanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.backupPlanId">BackupPlanId</a></code> | <code>string</code> | The ID of the backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.backupRules">BackupRules</a></code> | <code>object</code> | backup_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.backupVault">BackupVault</a></code> | <code>string</code> | Backup vault where the backups gets stored using this Backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.location">Location</a></code> | <code>string</code> | The location for the backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.description">Description</a></code> | <code>string</code> | The description allows for additional details about 'BackupPlan' and its use cases to be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#id GoogleBackupDrBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#project GoogleBackupDrBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts">GoogleBackupDrBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.backupPlanId"></a>

```csharp
public string BackupPlanId { get; set; }
```

- *Type:* string

The ID of the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#backup_plan_id GoogleBackupDrBackupPlan#backup_plan_id}

---

##### `BackupRules`<sup>Required</sup> <a name="BackupRules" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.backupRules"></a>

```csharp
public object BackupRules { get; set; }
```

- *Type:* object

backup_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#backup_rules GoogleBackupDrBackupPlan#backup_rules}

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.backupVault"></a>

```csharp
public string BackupVault { get; set; }
```

- *Type:* string

Backup vault where the backups gets stored using this Backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#backup_vault GoogleBackupDrBackupPlan#backup_vault}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#location GoogleBackupDrBackupPlan#location}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#resource_type GoogleBackupDrBackupPlan#resource_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description allows for additional details about 'BackupPlan' and its use cases to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#description GoogleBackupDrBackupPlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#id GoogleBackupDrBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#project GoogleBackupDrBackupPlan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanConfig.property.timeouts"></a>

```csharp
public GoogleBackupDrBackupPlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts">GoogleBackupDrBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#timeouts GoogleBackupDrBackupPlan#timeouts}

---

### GoogleBackupDrBackupPlanTimeouts <a name="GoogleBackupDrBackupPlanTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#create GoogleBackupDrBackupPlan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#delete GoogleBackupDrBackupPlan#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#create GoogleBackupDrBackupPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_backup_dr_backup_plan#delete GoogleBackupDrBackupPlan#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrBackupPlanBackupRulesList <a name="GoogleBackupDrBackupPlanBackupRulesList" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.get"></a>

```csharp
private GoogleBackupDrBackupPlanBackupRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBackupDrBackupPlanBackupRulesOutputReference <a name="GoogleBackupDrBackupPlanBackupRulesOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule">PutStandardSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSchedule` <a name="PutStandardSchedule" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule"></a>

```csharp
private void PutStandardSchedule(GoogleBackupDrBackupPlanBackupRulesStandardSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule">StandardSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference">GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDaysInput">BackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardScheduleInput">StandardScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardSchedule`<sup>Required</sup> <a name="StandardSchedule" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference StandardSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference">GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference</a>

---

##### `BackupRetentionDaysInput`<sup>Optional</sup> <a name="BackupRetentionDaysInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDaysInput"></a>

```csharp
public double BackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `StandardScheduleInput`<sup>Optional</sup> <a name="StandardScheduleInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardScheduleInput"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardSchedule StandardScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a>

---

##### `BackupRetentionDays`<sup>Required</sup> <a name="BackupRetentionDays" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays"></a>

```csharp
public double BackupRetentionDays { get; }
```

- *Type:* double

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference <a name="GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resetEndHourOfDay">ResetEndHourOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndHourOfDay` <a name="ResetEndHourOfDay" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resetEndHourOfDay"></a>

```csharp
private void ResetEndHourOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDayInput">EndHourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDayInput">StartHourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay">EndHourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay">StartHourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndHourOfDayInput`<sup>Optional</sup> <a name="EndHourOfDayInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDayInput"></a>

```csharp
public double EndHourOfDayInput { get; }
```

- *Type:* double

---

##### `StartHourOfDayInput`<sup>Optional</sup> <a name="StartHourOfDayInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDayInput"></a>

```csharp
public double StartHourOfDayInput { get; }
```

- *Type:* double

---

##### `EndHourOfDay`<sup>Required</sup> <a name="EndHourOfDay" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay"></a>

```csharp
public double EndHourOfDay { get; }
```

- *Type:* double

---

##### `StartHourOfDay`<sup>Required</sup> <a name="StartHourOfDay" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay"></a>

```csharp
public double StartHourOfDay { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---


### GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference <a name="GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow">PutBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth">PutWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetBackupWindow">ResetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetHourlyFrequency">ResetHourlyFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetWeekDayOfMonth">ResetWeekDayOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupWindow` <a name="PutBackupWindow" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow"></a>

```csharp
private void PutBackupWindow(GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---

##### `PutWeekDayOfMonth` <a name="PutWeekDayOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth"></a>

```csharp
private void PutWeekDayOfMonth(GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---

##### `ResetBackupWindow` <a name="ResetBackupWindow" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetBackupWindow"></a>

```csharp
private void ResetBackupWindow()
```

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfMonth"></a>

```csharp
private void ResetDaysOfMonth()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHourlyFrequency` <a name="ResetHourlyFrequency" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetHourlyFrequency"></a>

```csharp
private void ResetHourlyFrequency()
```

##### `ResetMonths` <a name="ResetMonths" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetWeekDayOfMonth` <a name="ResetWeekDayOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetWeekDayOfMonth"></a>

```csharp
private void ResetWeekDayOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow">BackupWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindowInput">BackupWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequencyInput">HourlyFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.monthsInput">MonthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonthInput">WeekDayOfMonthInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency">HourlyFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupWindow`<sup>Required</sup> <a name="BackupWindow" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference BackupWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference</a>

---

##### `WeekDayOfMonth`<sup>Required</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference WeekDayOfMonth { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference</a>

---

##### `BackupWindowInput`<sup>Optional</sup> <a name="BackupWindowInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindowInput"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow BackupWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">GoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonthInput"></a>

```csharp
public double[] DaysOfMonthInput { get; }
```

- *Type:* double[]

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `HourlyFrequencyInput`<sup>Optional</sup> <a name="HourlyFrequencyInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequencyInput"></a>

```csharp
public double HourlyFrequencyInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.monthsInput"></a>

```csharp
public string[] MonthsInput { get; }
```

- *Type:* string[]

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceTypeInput"></a>

```csharp
public string RecurrenceTypeInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `WeekDayOfMonthInput`<sup>Optional</sup> <a name="WeekDayOfMonthInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonthInput"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth WeekDayOfMonthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `HourlyFrequency`<sup>Required</sup> <a name="HourlyFrequency" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency"></a>

```csharp
public double HourlyFrequency { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardSchedule">GoogleBackupDrBackupPlanBackupRulesStandardSchedule</a>

---


### GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference <a name="GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonthInput">WeekOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth">WeekOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `WeekOfMonthInput`<sup>Optional</sup> <a name="WeekOfMonthInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonthInput"></a>

```csharp
public string WeekOfMonthInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `WeekOfMonth`<sup>Required</sup> <a name="WeekOfMonth" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth"></a>

```csharp
public string WeekOfMonth { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">GoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---


### GoogleBackupDrBackupPlanTimeoutsOutputReference <a name="GoogleBackupDrBackupPlanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlan.GoogleBackupDrBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



