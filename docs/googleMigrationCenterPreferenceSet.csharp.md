# `googleMigrationCenterPreferenceSet` Submodule <a name="`googleMigrationCenterPreferenceSet` Submodule" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterPreferenceSet <a name="GoogleMigrationCenterPreferenceSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set google_migration_center_preference_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSet(Construct Scope, string Id, GoogleMigrationCenterPreferenceSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig">GoogleMigrationCenterPreferenceSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig">GoogleMigrationCenterPreferenceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences">PutVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetVirtualMachinePreferences">ResetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMigrationCenterPreferenceSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

---

##### `PutVirtualMachinePreferences` <a name="PutVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences"></a>

```csharp
private void PutVirtualMachinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualMachinePreferences` <a name="ResetVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetVirtualMachinePreferences"></a>

```csharp
private void ResetVirtualMachinePreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMigrationCenterPreferenceSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMigrationCenterPreferenceSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMigrationCenterPreferenceSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMigrationCenterPreferenceSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleMigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMigrationCenterPreferenceSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMigrationCenterPreferenceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterPreferenceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference">GoogleMigrationCenterPreferenceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferences">VirtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetIdInput">PreferenceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferencesInput">VirtualMachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetId">PreferenceSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeouts"></a>

```csharp
public GoogleMigrationCenterPreferenceSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference">GoogleMigrationCenterPreferenceSetTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VirtualMachinePreferences`<sup>Required</sup> <a name="VirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference VirtualMachinePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PreferenceSetIdInput`<sup>Optional</sup> <a name="PreferenceSetIdInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetIdInput"></a>

```csharp
public string PreferenceSetIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachinePreferencesInput`<sup>Optional</sup> <a name="VirtualMachinePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferencesInput"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferences VirtualMachinePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PreferenceSetId`<sup>Required</sup> <a name="PreferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetId"></a>

```csharp
public string PreferenceSetId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterPreferenceSetConfig <a name="GoogleMigrationCenterPreferenceSetConfig" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string PreferenceSetId,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleMigrationCenterPreferenceSetTimeouts Timeouts = null,
    GoogleMigrationCenterPreferenceSetVirtualMachinePreferences VirtualMachinePreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.location">Location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.preferenceSetId">PreferenceSetId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.description">Description</a></code> | <code>string</code> | A description of the preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.virtualMachinePreferences">VirtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | virtual_machine_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#location GoogleMigrationCenterPreferenceSet#location}

---

##### `PreferenceSetId`<sup>Required</sup> <a name="PreferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.preferenceSetId"></a>

```csharp
public string PreferenceSetId { get; set; }
```

- *Type:* string

Required.

User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#preference_set_id GoogleMigrationCenterPreferenceSet#preference_set_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the preference set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#description GoogleMigrationCenterPreferenceSet#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#display_name GoogleMigrationCenterPreferenceSet#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.timeouts"></a>

```csharp
public GoogleMigrationCenterPreferenceSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#timeouts GoogleMigrationCenterPreferenceSet#timeouts}

---

##### `VirtualMachinePreferences`<sup>Optional</sup> <a name="VirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.virtualMachinePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferences VirtualMachinePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

virtual_machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#virtual_machine_preferences GoogleMigrationCenterPreferenceSet#virtual_machine_preferences}

---

### GoogleMigrationCenterPreferenceSetTimeouts <a name="GoogleMigrationCenterPreferenceSetTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#create GoogleMigrationCenterPreferenceSet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#delete GoogleMigrationCenterPreferenceSet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#update GoogleMigrationCenterPreferenceSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#create GoogleMigrationCenterPreferenceSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#delete GoogleMigrationCenterPreferenceSet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#update GoogleMigrationCenterPreferenceSet#update}.

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferences {
    string CommitmentPlan = null,
    GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences ComputeEnginePreferences = null,
    GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences RegionPreferences = null,
    string SizingOptimizationStrategy = null,
    GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences SoleTenancyPreferences = null,
    string TargetProduct = null,
    GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences VmwareEnginePreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences">ComputeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | compute_engine_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences">RegionPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | region_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy">SizingOptimizationStrategy</a></code> | <code>string</code> | Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences">SoleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | sole_tenancy_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct">TargetProduct</a></code> | <code>string</code> | Target product for assets using this preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences">VmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | vmware_engine_preferences block. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'COMMITMENT_PLAN_NONE', 'COMMITMENT_PLAN_ONE_YEAR', 'COMMITMENT_PLAN_THREE_YEARS'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `ComputeEnginePreferences`<sup>Optional</sup> <a name="ComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences ComputeEnginePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

compute_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#compute_engine_preferences GoogleMigrationCenterPreferenceSet#compute_engine_preferences}

---

##### `RegionPreferences`<sup>Optional</sup> <a name="RegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences RegionPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

region_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#region_preferences GoogleMigrationCenterPreferenceSet#region_preferences}

---

##### `SizingOptimizationStrategy`<sup>Optional</sup> <a name="SizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy"></a>

```csharp
public string SizingOptimizationStrategy { get; set; }
```

- *Type:* string

Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine.

If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. Possible values: 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#sizing_optimization_strategy GoogleMigrationCenterPreferenceSet#sizing_optimization_strategy}

---

##### `SoleTenancyPreferences`<sup>Optional</sup> <a name="SoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences SoleTenancyPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

sole_tenancy_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#sole_tenancy_preferences GoogleMigrationCenterPreferenceSet#sole_tenancy_preferences}

---

##### `TargetProduct`<sup>Optional</sup> <a name="TargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct"></a>

```csharp
public string TargetProduct { get; set; }
```

- *Type:* string

Target product for assets using this preference set.

Specify either target product or business goal, but not both. Possible values: 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#target_product GoogleMigrationCenterPreferenceSet#target_product}

---

##### `VmwareEnginePreferences`<sup>Optional</sup> <a name="VmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences VmwareEnginePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

vmware_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#vmware_engine_preferences GoogleMigrationCenterPreferenceSet#vmware_engine_preferences}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
    string LicenseType = null,
    GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences MachinePreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType">LicenseType</a></code> | <code>string</code> | License type to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences">MachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | machine_preferences block. |

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

License type to consider when calculating costs for virtual machine insights and recommendations.

If unspecified, costs are calculated based on the default licensing plan. Possible values: 'LICENSE_TYPE_UNSPECIFIED', 'LICENSE_TYPE_DEFAULT', 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#license_type GoogleMigrationCenterPreferenceSet#license_type}

---

##### `MachinePreferences`<sup>Optional</sup> <a name="MachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences MachinePreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#machine_preferences GoogleMigrationCenterPreferenceSet#machine_preferences}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
    object AllowedMachineSeries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries">AllowedMachineSeries</a></code> | <code>object</code> | allowed_machine_series block. |

---

##### `AllowedMachineSeries`<sup>Optional</sup> <a name="AllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries"></a>

```csharp
public object AllowedMachineSeries { get; set; }
```

- *Type:* object

allowed_machine_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#allowed_machine_series GoogleMigrationCenterPreferenceSet#allowed_machine_series}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
    string Code = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code">Code</a></code> | <code>string</code> | Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#code GoogleMigrationCenterPreferenceSet#code}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences {
    string[] PreferredRegions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions">PreferredRegions</a></code> | <code>string[]</code> | A list of preferred regions, ordered by the most preferred region first. |

---

##### `PreferredRegions`<sup>Optional</sup> <a name="PreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions"></a>

```csharp
public string[] PreferredRegions { get; set; }
```

- *Type:* string[]

A list of preferred regions, ordered by the most preferred region first.

Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#preferred_regions GoogleMigrationCenterPreferenceSet#preferred_regions}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences {
    string CommitmentPlan = null,
    double CpuOvercommitRatio = null,
    string HostMaintenancePolicy = null,
    object NodeTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy">HostMaintenancePolicy</a></code> | <code>string</code> | Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes">NodeTypes</a></code> | <code>object</code> | node_types block. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR', 'COMMITMENT_3_YEAR'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `CpuOvercommitRatio`<sup>Optional</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; set; }
```

- *Type:* double

CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#cpu_overcommit_ratio GoogleMigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `HostMaintenancePolicy`<sup>Optional</sup> <a name="HostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy"></a>

```csharp
public string HostMaintenancePolicy { get; set; }
```

- *Type:* string

Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#host_maintenance_policy GoogleMigrationCenterPreferenceSet#host_maintenance_policy}

---

##### `NodeTypes`<sup>Optional</sup> <a name="NodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes"></a>

```csharp
public object NodeTypes { get; set; }
```

- *Type:* object

node_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#node_types GoogleMigrationCenterPreferenceSet#node_types}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes {
    string NodeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName">NodeName</a></code> | <code>string</code> | Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes. |

---

##### `NodeName`<sup>Optional</sup> <a name="NodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName"></a>

```csharp
public string NodeName { get; set; }
```

- *Type:* string

Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#node_name GoogleMigrationCenterPreferenceSet#node_name}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences {
    string CommitmentPlan = null,
    double CpuOvercommitRatio = null,
    double MemoryOvercommitRatio = null,
    double StorageDeduplicationCompressionRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio">MemoryOvercommitRatio</a></code> | <code>double</code> | Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio">StorageDeduplicationCompressionRatio</a></code> | <code>double</code> | The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT',

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `CpuOvercommitRatio`<sup>Optional</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; set; }
```

- *Type:* double

CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#cpu_overcommit_ratio GoogleMigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `MemoryOvercommitRatio`<sup>Optional</sup> <a name="MemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio"></a>

```csharp
public double MemoryOvercommitRatio { get; set; }
```

- *Type:* double

Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#memory_overcommit_ratio GoogleMigrationCenterPreferenceSet#memory_overcommit_ratio}

---

##### `StorageDeduplicationCompressionRatio`<sup>Optional</sup> <a name="StorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio"></a>

```csharp
public double StorageDeduplicationCompressionRatio { get; set; }
```

- *Type:* double

The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression.

Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_migration_center_preference_set#storage_deduplication_compression_ratio GoogleMigrationCenterPreferenceSet#storage_deduplication_compression_ratio}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterPreferenceSetTimeoutsOutputReference <a name="GoogleMigrationCenterPreferenceSetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get"></a>

```csharp
private GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries">PutAllowedMachineSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries">ResetAllowedMachineSeries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedMachineSeries` <a name="PutAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries"></a>

```csharp
private void PutAllowedMachineSeries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedMachineSeries` <a name="ResetAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries"></a>

```csharp
private void ResetAllowedMachineSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries">AllowedMachineSeries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput">AllowedMachineSeriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedMachineSeries`<sup>Required</sup> <a name="AllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList AllowedMachineSeries { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a>

---

##### `AllowedMachineSeriesInput`<sup>Optional</sup> <a name="AllowedMachineSeriesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput"></a>

```csharp
public object AllowedMachineSeriesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences">PutMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences">ResetMachinePreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachinePreferences` <a name="PutMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences"></a>

```csharp
private void PutMachinePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetMachinePreferences` <a name="ResetMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences"></a>

```csharp
private void ResetMachinePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences">MachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput">MachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachinePreferences`<sup>Required</sup> <a name="MachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference MachinePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a>

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `MachinePreferencesInput`<sup>Optional</sup> <a name="MachinePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences MachinePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences">PutComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences">PutRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences">PutSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences">PutVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences">ResetComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences">ResetRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy">ResetSizingOptimizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences">ResetSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct">ResetTargetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences">ResetVmwareEnginePreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeEnginePreferences` <a name="PutComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences"></a>

```csharp
private void PutComputeEnginePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `PutRegionPreferences` <a name="PutRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences"></a>

```csharp
private void PutRegionPreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `PutSoleTenancyPreferences` <a name="PutSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences"></a>

```csharp
private void PutSoleTenancyPreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `PutVmwareEnginePreferences` <a name="PutVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences"></a>

```csharp
private void PutVmwareEnginePreferences(GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetComputeEnginePreferences` <a name="ResetComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences"></a>

```csharp
private void ResetComputeEnginePreferences()
```

##### `ResetRegionPreferences` <a name="ResetRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences"></a>

```csharp
private void ResetRegionPreferences()
```

##### `ResetSizingOptimizationStrategy` <a name="ResetSizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy"></a>

```csharp
private void ResetSizingOptimizationStrategy()
```

##### `ResetSoleTenancyPreferences` <a name="ResetSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences"></a>

```csharp
private void ResetSoleTenancyPreferences()
```

##### `ResetTargetProduct` <a name="ResetTargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct"></a>

```csharp
private void ResetTargetProduct()
```

##### `ResetVmwareEnginePreferences` <a name="ResetVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences"></a>

```csharp
private void ResetVmwareEnginePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences">ComputeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences">RegionPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences">SoleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences">VmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput">ComputeEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput">RegionPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput">SizingOptimizationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput">SoleTenancyPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput">TargetProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput">VmwareEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy">SizingOptimizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct">TargetProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeEnginePreferences`<sup>Required</sup> <a name="ComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference ComputeEnginePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a>

---

##### `RegionPreferences`<sup>Required</sup> <a name="RegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference RegionPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a>

---

##### `SoleTenancyPreferences`<sup>Required</sup> <a name="SoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference SoleTenancyPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a>

---

##### `VmwareEnginePreferences`<sup>Required</sup> <a name="VmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference VmwareEnginePreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a>

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `ComputeEnginePreferencesInput`<sup>Optional</sup> <a name="ComputeEnginePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences ComputeEnginePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `RegionPreferencesInput`<sup>Optional</sup> <a name="RegionPreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences RegionPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `SizingOptimizationStrategyInput`<sup>Optional</sup> <a name="SizingOptimizationStrategyInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput"></a>

```csharp
public string SizingOptimizationStrategyInput { get; }
```

- *Type:* string

---

##### `SoleTenancyPreferencesInput`<sup>Optional</sup> <a name="SoleTenancyPreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences SoleTenancyPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `TargetProductInput`<sup>Optional</sup> <a name="TargetProductInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput"></a>

```csharp
public string TargetProductInput { get; }
```

- *Type:* string

---

##### `VmwareEnginePreferencesInput`<sup>Optional</sup> <a name="VmwareEnginePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences VmwareEnginePreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `SizingOptimizationStrategy`<sup>Required</sup> <a name="SizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy"></a>

```csharp
public string SizingOptimizationStrategy { get; }
```

- *Type:* string

---

##### `TargetProduct`<sup>Required</sup> <a name="TargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct"></a>

```csharp
public string TargetProduct { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions">ResetPreferredRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredRegions` <a name="ResetPreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions"></a>

```csharp
private void ResetPreferredRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput">PreferredRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions">PreferredRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredRegionsInput`<sup>Optional</sup> <a name="PreferredRegionsInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput"></a>

```csharp
public string[] PreferredRegionsInput { get; }
```

- *Type:* string[]

---

##### `PreferredRegions`<sup>Required</sup> <a name="PreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions"></a>

```csharp
public string[] PreferredRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get"></a>

```csharp
private GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName">ResetNodeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeName` <a name="ResetNodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName"></a>

```csharp
private void ResetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput"></a>

```csharp
public string NodeNameInput { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes">PutNodeTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio">ResetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy">ResetHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes">ResetNodeTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeTypes` <a name="PutNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes"></a>

```csharp
private void PutNodeTypes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes.parameter.value"></a>

- *Type:* object

---

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetCpuOvercommitRatio` <a name="ResetCpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio"></a>

```csharp
private void ResetCpuOvercommitRatio()
```

##### `ResetHostMaintenancePolicy` <a name="ResetHostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy"></a>

```csharp
private void ResetHostMaintenancePolicy()
```

##### `ResetNodeTypes` <a name="ResetNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes"></a>

```csharp
private void ResetNodeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes">NodeTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput">CpuOvercommitRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput">HostMaintenancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput">NodeTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy">HostMaintenancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeTypes`<sup>Required</sup> <a name="NodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList NodeTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a>

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatioInput`<sup>Optional</sup> <a name="CpuOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```csharp
public double CpuOvercommitRatioInput { get; }
```

- *Type:* double

---

##### `HostMaintenancePolicyInput`<sup>Optional</sup> <a name="HostMaintenancePolicyInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput"></a>

```csharp
public string HostMaintenancePolicyInput { get; }
```

- *Type:* string

---

##### `NodeTypesInput`<sup>Optional</sup> <a name="NodeTypesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput"></a>

```csharp
public object NodeTypesInput { get; }
```

- *Type:* object

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatio`<sup>Required</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; }
```

- *Type:* double

---

##### `HostMaintenancePolicy`<sup>Required</sup> <a name="HostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy"></a>

```csharp
public string HostMaintenancePolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio">ResetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio">ResetMemoryOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio">ResetStorageDeduplicationCompressionRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetCpuOvercommitRatio` <a name="ResetCpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio"></a>

```csharp
private void ResetCpuOvercommitRatio()
```

##### `ResetMemoryOvercommitRatio` <a name="ResetMemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio"></a>

```csharp
private void ResetMemoryOvercommitRatio()
```

##### `ResetStorageDeduplicationCompressionRatio` <a name="ResetStorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio"></a>

```csharp
private void ResetStorageDeduplicationCompressionRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput">CpuOvercommitRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput">MemoryOvercommitRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput">StorageDeduplicationCompressionRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio">MemoryOvercommitRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio">StorageDeduplicationCompressionRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatioInput`<sup>Optional</sup> <a name="CpuOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```csharp
public double CpuOvercommitRatioInput { get; }
```

- *Type:* double

---

##### `MemoryOvercommitRatioInput`<sup>Optional</sup> <a name="MemoryOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput"></a>

```csharp
public double MemoryOvercommitRatioInput { get; }
```

- *Type:* double

---

##### `StorageDeduplicationCompressionRatioInput`<sup>Optional</sup> <a name="StorageDeduplicationCompressionRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput"></a>

```csharp
public double StorageDeduplicationCompressionRatioInput { get; }
```

- *Type:* double

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `CpuOvercommitRatio`<sup>Required</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio"></a>

```csharp
public double CpuOvercommitRatio { get; }
```

- *Type:* double

---

##### `MemoryOvercommitRatio`<sup>Required</sup> <a name="MemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio"></a>

```csharp
public double MemoryOvercommitRatio { get; }
```

- *Type:* double

---

##### `StorageDeduplicationCompressionRatio`<sup>Required</sup> <a name="StorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio"></a>

```csharp
public double StorageDeduplicationCompressionRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---



