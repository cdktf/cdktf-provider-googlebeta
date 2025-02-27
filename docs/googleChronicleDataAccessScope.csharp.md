# `googleChronicleDataAccessScope` Submodule <a name="`googleChronicleDataAccessScope` Submodule" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataAccessScope <a name="GoogleChronicleDataAccessScope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope google_chronicle_data_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScope(Construct Scope, string Id, GoogleChronicleDataAccessScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig">GoogleChronicleDataAccessScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig">GoogleChronicleDataAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels">PutAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels">PutDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowAll">ResetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowedDataAccessLabels">ResetAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDeniedDataAccessLabels">ResetDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedDataAccessLabels` <a name="PutAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels"></a>

```csharp
private void PutAllowedDataAccessLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels.parameter.value"></a>

- *Type:* object

---

##### `PutDeniedDataAccessLabels` <a name="PutDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels"></a>

```csharp
private void PutDeniedDataAccessLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleDataAccessScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

---

##### `ResetAllowAll` <a name="ResetAllowAll" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowAll"></a>

```csharp
private void ResetAllowAll()
```

##### `ResetAllowedDataAccessLabels` <a name="ResetAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowedDataAccessLabels"></a>

```csharp
private void ResetAllowedDataAccessLabels()
```

##### `ResetDeniedDataAccessLabels` <a name="ResetDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDeniedDataAccessLabels"></a>

```csharp
private void ResetDeniedDataAccessLabels()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleDataAccessScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleDataAccessScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleDataAccessScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleDataAccessScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleDataAccessScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleDataAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabels">AllowedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.author">Author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabels">DeniedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference">GoogleChronicleDataAccessScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAllInput">AllowAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabelsInput">AllowedDataAccessLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeIdInput">DataAccessScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabelsInput">DeniedDataAccessLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAll">AllowAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeId">DataAccessScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedDataAccessLabels`<sup>Required</sup> <a name="AllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabels"></a>

```csharp
public GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList AllowedDataAccessLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList</a>

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.author"></a>

```csharp
public string Author { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeniedDataAccessLabels`<sup>Required</sup> <a name="DeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabels"></a>

```csharp
public GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList DeniedDataAccessLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeouts"></a>

```csharp
public GoogleChronicleDataAccessScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference">GoogleChronicleDataAccessScopeTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowAllInput`<sup>Optional</sup> <a name="AllowAllInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAllInput"></a>

```csharp
public object AllowAllInput { get; }
```

- *Type:* object

---

##### `AllowedDataAccessLabelsInput`<sup>Optional</sup> <a name="AllowedDataAccessLabelsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabelsInput"></a>

```csharp
public object AllowedDataAccessLabelsInput { get; }
```

- *Type:* object

---

##### `DataAccessScopeIdInput`<sup>Optional</sup> <a name="DataAccessScopeIdInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeIdInput"></a>

```csharp
public string DataAccessScopeIdInput { get; }
```

- *Type:* string

---

##### `DeniedDataAccessLabelsInput`<sup>Optional</sup> <a name="DeniedDataAccessLabelsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabelsInput"></a>

```csharp
public object DeniedDataAccessLabelsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowAll`<sup>Required</sup> <a name="AllowAll" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAll"></a>

```csharp
public object AllowAll { get; }
```

- *Type:* object

---

##### `DataAccessScopeId`<sup>Required</sup> <a name="DataAccessScopeId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeId"></a>

```csharp
public string DataAccessScopeId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataAccessScopeAllowedDataAccessLabels <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeAllowedDataAccessLabels {
    string AssetNamespace = null,
    string DataAccessLabel = null,
    GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel IngestionLabel = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.logType">LogType</a></code> | <code>string</code> | The name of the log type. |

---

##### `AssetNamespace`<sup>Optional</sup> <a name="AssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; set; }
```

- *Type:* string

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}

---

##### `DataAccessLabel`<sup>Optional</sup> <a name="DataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; set; }
```

- *Type:* string

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}

---

##### `IngestionLabel`<sup>Optional</sup> <a name="IngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel"></a>

```csharp
public GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel IngestionLabel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}

---

### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel {
    string IngestionLabelKey,
    string IngestionLabelValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | Optional. |

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; set; }
```

- *Type:* string

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

##### `IngestionLabelValue`<sup>Optional</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; set; }
```

- *Type:* string

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

### GoogleChronicleDataAccessScopeConfig <a name="GoogleChronicleDataAccessScopeConfig" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataAccessScopeId,
    string Instance,
    string Location,
    object AllowAll = null,
    object AllowedDataAccessLabels = null,
    object DeniedDataAccessLabels = null,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleChronicleDataAccessScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dataAccessScopeId">DataAccessScopeId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.instance">Instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowAll">AllowAll</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowedDataAccessLabels">AllowedDataAccessLabels</a></code> | <code>object</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.deniedDataAccessLabels">DeniedDataAccessLabels</a></code> | <code>object</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.description">Description</a></code> | <code>string</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataAccessScopeId`<sup>Required</sup> <a name="DataAccessScopeId" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dataAccessScopeId"></a>

```csharp
public string DataAccessScopeId { get; set; }
```

- *Type:* string

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#data_access_scope_id GoogleChronicleDataAccessScope#data_access_scope_id}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#instance GoogleChronicleDataAccessScope#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#location GoogleChronicleDataAccessScope#location}

---

##### `AllowAll`<sup>Optional</sup> <a name="AllowAll" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowAll"></a>

```csharp
public object AllowAll { get; set; }
```

- *Type:* object

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#allow_all GoogleChronicleDataAccessScope#allow_all}

---

##### `AllowedDataAccessLabels`<sup>Optional</sup> <a name="AllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowedDataAccessLabels"></a>

```csharp
public object AllowedDataAccessLabels { get; set; }
```

- *Type:* object

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#allowed_data_access_labels GoogleChronicleDataAccessScope#allowed_data_access_labels}

---

##### `DeniedDataAccessLabels`<sup>Optional</sup> <a name="DeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.deniedDataAccessLabels"></a>

```csharp
public object DeniedDataAccessLabels { get; set; }
```

- *Type:* object

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#denied_data_access_labels GoogleChronicleDataAccessScope#denied_data_access_labels}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#description GoogleChronicleDataAccessScope#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.timeouts"></a>

```csharp
public GoogleChronicleDataAccessScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#timeouts GoogleChronicleDataAccessScope#timeouts}

---

### GoogleChronicleDataAccessScopeDeniedDataAccessLabels <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeDeniedDataAccessLabels {
    string AssetNamespace = null,
    string DataAccessLabel = null,
    GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel IngestionLabel = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.logType">LogType</a></code> | <code>string</code> | The name of the log type. |

---

##### `AssetNamespace`<sup>Optional</sup> <a name="AssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; set; }
```

- *Type:* string

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}

---

##### `DataAccessLabel`<sup>Optional</sup> <a name="DataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; set; }
```

- *Type:* string

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}

---

##### `IngestionLabel`<sup>Optional</sup> <a name="IngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel"></a>

```csharp
public GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel IngestionLabel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}

---

### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel {
    string IngestionLabelKey,
    string IngestionLabelValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | Optional. |

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; set; }
```

- *Type:* string

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

##### `IngestionLabelValue`<sup>Optional</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; set; }
```

- *Type:* string

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

### GoogleChronicleDataAccessScopeTimeouts <a name="GoogleChronicleDataAccessScopeTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">ResetIngestionLabelValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngestionLabelValue` <a name="ResetIngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```csharp
private void ResetIngestionLabelValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">IngestionLabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">IngestionLabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestionLabelKeyInput`<sup>Optional</sup> <a name="IngestionLabelKeyInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```csharp
public string IngestionLabelKeyInput { get; }
```

- *Type:* string

---

##### `IngestionLabelValueInput`<sup>Optional</sup> <a name="IngestionLabelValueInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```csharp
public string IngestionLabelValueInput { get; }
```

- *Type:* string

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; }
```

- *Type:* string

---

##### `IngestionLabelValue`<sup>Required</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---


### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get"></a>

```csharp
private GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel">PutIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace">ResetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel">ResetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel">ResetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngestionLabel` <a name="PutIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```csharp
private void PutIngestionLabel(GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `ResetAssetNamespace` <a name="ResetAssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```csharp
private void ResetAssetNamespace()
```

##### `ResetDataAccessLabel` <a name="ResetDataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```csharp
private void ResetDataAccessLabel()
```

##### `ResetIngestionLabel` <a name="ResetIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```csharp
private void ResetIngestionLabel()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput">AssetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput">DataAccessLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput">IngestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IngestionLabel`<sup>Required</sup> <a name="IngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```csharp
public GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference IngestionLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `AssetNamespaceInput`<sup>Optional</sup> <a name="AssetNamespaceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```csharp
public string AssetNamespaceInput { get; }
```

- *Type:* string

---

##### `DataAccessLabelInput`<sup>Optional</sup> <a name="DataAccessLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```csharp
public string DataAccessLabelInput { get; }
```

- *Type:* string

---

##### `IngestionLabelInput`<sup>Optional</sup> <a name="IngestionLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```csharp
public GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel IngestionLabelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `AssetNamespace`<sup>Required</sup> <a name="AssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; }
```

- *Type:* string

---

##### `DataAccessLabel`<sup>Required</sup> <a name="DataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">ResetIngestionLabelValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngestionLabelValue` <a name="ResetIngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```csharp
private void ResetIngestionLabelValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">IngestionLabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">IngestionLabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestionLabelKeyInput`<sup>Optional</sup> <a name="IngestionLabelKeyInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```csharp
public string IngestionLabelKeyInput { get; }
```

- *Type:* string

---

##### `IngestionLabelValueInput`<sup>Optional</sup> <a name="IngestionLabelValueInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```csharp
public string IngestionLabelValueInput { get; }
```

- *Type:* string

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; }
```

- *Type:* string

---

##### `IngestionLabelValue`<sup>Required</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get"></a>

```csharp
private GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel">PutIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace">ResetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel">ResetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel">ResetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngestionLabel` <a name="PutIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```csharp
private void PutIngestionLabel(GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `ResetAssetNamespace` <a name="ResetAssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```csharp
private void ResetAssetNamespace()
```

##### `ResetDataAccessLabel` <a name="ResetDataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```csharp
private void ResetDataAccessLabel()
```

##### `ResetIngestionLabel` <a name="ResetIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```csharp
private void ResetIngestionLabel()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput">AssetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput">DataAccessLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput">IngestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IngestionLabel`<sup>Required</sup> <a name="IngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```csharp
public GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference IngestionLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `AssetNamespaceInput`<sup>Optional</sup> <a name="AssetNamespaceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```csharp
public string AssetNamespaceInput { get; }
```

- *Type:* string

---

##### `DataAccessLabelInput`<sup>Optional</sup> <a name="DataAccessLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```csharp
public string DataAccessLabelInput { get; }
```

- *Type:* string

---

##### `IngestionLabelInput`<sup>Optional</sup> <a name="IngestionLabelInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```csharp
public GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel IngestionLabelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `AssetNamespace`<sup>Required</sup> <a name="AssetNamespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; }
```

- *Type:* string

---

##### `DataAccessLabel`<sup>Required</sup> <a name="DataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleChronicleDataAccessScopeTimeoutsOutputReference <a name="GoogleChronicleDataAccessScopeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleDataAccessScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



