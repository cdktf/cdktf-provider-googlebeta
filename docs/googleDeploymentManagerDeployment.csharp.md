# `googleDeploymentManagerDeployment` Submodule <a name="`googleDeploymentManagerDeployment` Submodule" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeploymentManagerDeployment <a name="GoogleDeploymentManagerDeployment" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeployment(Construct Scope, string Id, GoogleDeploymentManagerDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig">GoogleDeploymentManagerDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig">GoogleDeploymentManagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetCreatePolicy">ResetCreatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDeletePolicy">ResetDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget"></a>

```csharp
private void PutTarget(GoogleDeploymentManagerDeploymentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDeploymentManagerDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

---

##### `ResetCreatePolicy` <a name="ResetCreatePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetCreatePolicy"></a>

```csharp
private void ResetCreatePolicy()
```

##### `ResetDeletePolicy` <a name="ResetDeletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDeletePolicy"></a>

```csharp
private void ResetDeletePolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetPreview"></a>

```csharp
private void ResetPreview()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeploymentManagerDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeploymentManagerDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeploymentManagerDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeploymentManagerDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDeploymentManagerDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDeploymentManagerDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeploymentManagerDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeploymentManagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeploymentManagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList">GoogleDeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.manifest">Manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference">GoogleDeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference">GoogleDeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicyInput">CreatePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicyInput">DeletePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.previewInput">PreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicy">CreatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicy">DeletePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.preview">Preview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labels"></a>

```csharp
public GoogleDeploymentManagerDeploymentLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList">GoogleDeploymentManagerDeploymentLabelsList</a>

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.manifest"></a>

```csharp
public string Manifest { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.target"></a>

```csharp
public GoogleDeploymentManagerDeploymentTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference">GoogleDeploymentManagerDeploymentTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeouts"></a>

```csharp
public GoogleDeploymentManagerDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference">GoogleDeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `CreatePolicyInput`<sup>Optional</sup> <a name="CreatePolicyInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicyInput"></a>

```csharp
public string CreatePolicyInput { get; }
```

- *Type:* string

---

##### `DeletePolicyInput`<sup>Optional</sup> <a name="DeletePolicyInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicyInput"></a>

```csharp
public string DeletePolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.previewInput"></a>

```csharp
public object PreviewInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.targetInput"></a>

```csharp
public GoogleDeploymentManagerDeploymentTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicy"></a>

```csharp
public string CreatePolicy { get; }
```

- *Type:* string

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicy"></a>

```csharp
public string DeletePolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.preview"></a>

```csharp
public object Preview { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeploymentManagerDeploymentConfig <a name="GoogleDeploymentManagerDeploymentConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleDeploymentManagerDeploymentTarget Target,
    string CreatePolicy = null,
    string DeletePolicy = null,
    string Description = null,
    string Id = null,
    object Labels = null,
    object Preview = null,
    string Project = null,
    GoogleDeploymentManagerDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.createPolicy">CreatePolicy</a></code> | <code>string</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.deletePolicy">DeletePolicy</a></code> | <code>string</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.preview">Preview</a></code> | <code>object</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.target"></a>

```csharp
public GoogleDeploymentManagerDeploymentTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#target GoogleDeploymentManagerDeployment#target}

---

##### `CreatePolicy`<sup>Optional</sup> <a name="CreatePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.createPolicy"></a>

```csharp
public string CreatePolicy { get; set; }
```

- *Type:* string

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#create_policy GoogleDeploymentManagerDeployment#create_policy}

---

##### `DeletePolicy`<sup>Optional</sup> <a name="DeletePolicy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```csharp
public string DeletePolicy { get; set; }
```

- *Type:* string

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#delete_policy GoogleDeploymentManagerDeployment#delete_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#description GoogleDeploymentManagerDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#labels GoogleDeploymentManagerDeployment#labels}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.preview"></a>

```csharp
public object Preview { get; set; }
```

- *Type:* object

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#preview GoogleDeploymentManagerDeployment#preview}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.timeouts"></a>

```csharp
public GoogleDeploymentManagerDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#timeouts GoogleDeploymentManagerDeployment#timeouts}

---

### GoogleDeploymentManagerDeploymentLabels <a name="GoogleDeploymentManagerDeploymentLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentLabels {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.key">Key</a></code> | <code>string</code> | Key for label. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.value">Value</a></code> | <code>string</code> | Value of label. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#key GoogleDeploymentManagerDeployment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#value GoogleDeploymentManagerDeployment#value}

---

### GoogleDeploymentManagerDeploymentTarget <a name="GoogleDeploymentManagerDeploymentTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTarget {
    GoogleDeploymentManagerDeploymentTargetConfig Config,
    object Imports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.imports">Imports</a></code> | <code>object</code> | imports block. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.config"></a>

```csharp
public GoogleDeploymentManagerDeploymentTargetConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#config GoogleDeploymentManagerDeployment#config}

---

##### `Imports`<sup>Optional</sup> <a name="Imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.imports"></a>

```csharp
public object Imports { get; set; }
```

- *Type:* object

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#imports GoogleDeploymentManagerDeployment#imports}

---

### GoogleDeploymentManagerDeploymentTargetConfig <a name="GoogleDeploymentManagerDeploymentTargetConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTargetConfig {
    string Content
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.property.content">Content</a></code> | <code>string</code> | The full YAML contents of your configuration file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

### GoogleDeploymentManagerDeploymentTargetImports <a name="GoogleDeploymentManagerDeploymentTargetImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTargetImports {
    string Content = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.content">Content</a></code> | <code>string</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.name">Name</a></code> | <code>string</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

### GoogleDeploymentManagerDeploymentTimeouts <a name="GoogleDeploymentManagerDeploymentTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeploymentManagerDeploymentLabelsList <a name="GoogleDeploymentManagerDeploymentLabelsList" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get"></a>

```csharp
private GoogleDeploymentManagerDeploymentLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDeploymentManagerDeploymentLabelsOutputReference <a name="GoogleDeploymentManagerDeploymentLabelsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDeploymentManagerDeploymentTargetConfigOutputReference <a name="GoogleDeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTargetConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDeploymentManagerDeploymentTargetConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---


### GoogleDeploymentManagerDeploymentTargetImportsList <a name="GoogleDeploymentManagerDeploymentTargetImportsList" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTargetImportsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get"></a>

```csharp
private GoogleDeploymentManagerDeploymentTargetImportsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDeploymentManagerDeploymentTargetImportsOutputReference <a name="GoogleDeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTargetImportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDeploymentManagerDeploymentTargetOutputReference <a name="GoogleDeploymentManagerDeploymentTargetOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports">PutImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resetImports">ResetImports</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```csharp
private void PutConfig(GoogleDeploymentManagerDeploymentTargetConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---

##### `PutImports` <a name="PutImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```csharp
private void PutImports(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* object

---

##### `ResetImports` <a name="ResetImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```csharp
private void ResetImports()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference">GoogleDeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.imports">Imports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList">GoogleDeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.importsInput">ImportsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```csharp
public GoogleDeploymentManagerDeploymentTargetConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference">GoogleDeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `Imports`<sup>Required</sup> <a name="Imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```csharp
public GoogleDeploymentManagerDeploymentTargetImportsList Imports { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList">GoogleDeploymentManagerDeploymentTargetImportsList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```csharp
public GoogleDeploymentManagerDeploymentTargetConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---

##### `ImportsInput`<sup>Optional</sup> <a name="ImportsInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```csharp
public object ImportsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleDeploymentManagerDeploymentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---


### GoogleDeploymentManagerDeploymentTimeoutsOutputReference <a name="GoogleDeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDeploymentManagerDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



