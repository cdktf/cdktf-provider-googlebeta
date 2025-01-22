# `googleBackupDrBackupPlanAssociation` Submodule <a name="`googleBackupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrBackupPlanAssociation <a name="GoogleBackupDrBackupPlanAssociation" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociation(Construct Scope, string Id, GoogleBackupDrBackupPlanAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig">GoogleBackupDrBackupPlanAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig">GoogleBackupDrBackupPlanAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBackupDrBackupPlanAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts">GoogleBackupDrBackupPlanAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlanAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlanAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlanAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBackupDrBackupPlanAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrBackupPlanAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo">RulesConfigInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList">GoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference">GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">BackupPlanAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlanInput">BackupPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlan">BackupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId">BackupPlanAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```csharp
public string LastSuccessfulBackupConsistencyTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RulesConfigInfo`<sup>Required</sup> <a name="RulesConfigInfo" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```csharp
public GoogleBackupDrBackupPlanAssociationRulesConfigInfoList RulesConfigInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList">GoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.timeouts"></a>

```csharp
public GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference">GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BackupPlanAssociationIdInput`<sup>Optional</sup> <a name="BackupPlanAssociationIdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```csharp
public string BackupPlanAssociationIdInput { get; }
```

- *Type:* string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlanInput"></a>

```csharp
public string BackupPlanInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlan"></a>

```csharp
public string BackupPlan { get; }
```

- *Type:* string

---

##### `BackupPlanAssociationId`<sup>Required</sup> <a name="BackupPlanAssociationId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```csharp
public string BackupPlanAssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrBackupPlanAssociationConfig <a name="GoogleBackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupPlan,
    string BackupPlanAssociationId,
    string Location,
    string Resource,
    string ResourceType,
    string Id = null,
    string Project = null,
    GoogleBackupDrBackupPlanAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.backupPlan">BackupPlan</a></code> | <code>string</code> | The BP with which resource needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">BackupPlanAssociationId</a></code> | <code>string</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.location">Location</a></code> | <code>string</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.resource">Resource</a></code> | <code>string</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type of workload on which backupplan is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#id GoogleBackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#project GoogleBackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts">GoogleBackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.backupPlan"></a>

```csharp
public string BackupPlan { get; set; }
```

- *Type:* string

The BP with which resource needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#backup_plan GoogleBackupDrBackupPlanAssociation#backup_plan}

---

##### `BackupPlanAssociationId`<sup>Required</sup> <a name="BackupPlanAssociationId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```csharp
public string BackupPlanAssociationId { get; set; }
```

- *Type:* string

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#backup_plan_association_id GoogleBackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#location GoogleBackupDrBackupPlanAssociation#location}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#resource GoogleBackupDrBackupPlanAssociation#resource}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type of workload on which backupplan is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#resource_type GoogleBackupDrBackupPlanAssociation#resource_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#id GoogleBackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#project GoogleBackupDrBackupPlanAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationConfig.property.timeouts"></a>

```csharp
public GoogleBackupDrBackupPlanAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts">GoogleBackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#timeouts GoogleBackupDrBackupPlanAssociation#timeouts}

---

### GoogleBackupDrBackupPlanAssociationRulesConfigInfo <a name="GoogleBackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationRulesConfigInfo {

};
```


### GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError {

};
```


### GoogleBackupDrBackupPlanAssociationTimeouts <a name="GoogleBackupDrBackupPlanAssociationTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#create GoogleBackupDrBackupPlanAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#delete GoogleBackupDrBackupPlanAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#create GoogleBackupDrBackupPlanAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_plan_association#delete GoogleBackupDrBackupPlanAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```csharp
private GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### GoogleBackupDrBackupPlanAssociationRulesConfigInfoList <a name="GoogleBackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationRulesConfigInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```csharp
private GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfo">GoogleBackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```csharp
public GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList LastBackupError { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">GoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```csharp
public string LastBackupState { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBackupDrBackupPlanAssociationRulesConfigInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationRulesConfigInfo">GoogleBackupDrBackupPlanAssociationRulesConfigInfo</a>

---


### GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference <a name="GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupPlanAssociation.GoogleBackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



