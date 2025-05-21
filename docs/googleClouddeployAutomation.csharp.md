# `googleClouddeployAutomation` Submodule <a name="`googleClouddeployAutomation` Submodule" id="@cdktf/provider-google-beta.googleClouddeployAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployAutomation <a name="GoogleClouddeployAutomation" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation google_clouddeploy_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomation(Construct Scope, string Id, GoogleClouddeployAutomationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig">GoogleClouddeployAutomationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig">GoogleClouddeployAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector"></a>

```csharp
private void PutSelector(GoogleClouddeployAutomationSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleClouddeployAutomationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetSuspended"></a>

```csharp
private void ResetSuspended()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployAutomation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployAutomation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployAutomation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployAutomation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployAutomation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList">GoogleClouddeployAutomationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference">GoogleClouddeployAutomationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference">GoogleClouddeployAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipelineInput">DeliveryPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selectorInput">SelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspendedInput">SuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipeline">DeliveryPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspended">Suspended</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rules"></a>

```csharp
public GoogleClouddeployAutomationRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList">GoogleClouddeployAutomationRulesList</a>

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selector"></a>

```csharp
public GoogleClouddeployAutomationSelectorOutputReference Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference">GoogleClouddeployAutomationSelectorOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeouts"></a>

```csharp
public GoogleClouddeployAutomationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference">GoogleClouddeployAutomationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeliveryPipelineInput`<sup>Optional</sup> <a name="DeliveryPipelineInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipelineInput"></a>

```csharp
public string DeliveryPipelineInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selectorInput"></a>

```csharp
public GoogleClouddeployAutomationSelector SelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspendedInput"></a>

```csharp
public object SuspendedInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeliveryPipeline`<sup>Required</sup> <a name="DeliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipeline"></a>

```csharp
public string DeliveryPipeline { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspended"></a>

```csharp
public object Suspended { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployAutomationConfig <a name="GoogleClouddeployAutomationConfig" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeliveryPipeline,
    string Location,
    string Name,
    object Rules,
    GoogleClouddeployAutomationSelector Selector,
    string ServiceAccount,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    object Suspended = null,
    GoogleClouddeployAutomationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.deliveryPipeline">DeliveryPipeline</a></code> | <code>string</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.name">Name</a></code> | <code>string</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.description">Description</a></code> | <code>string</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.suspended">Suspended</a></code> | <code>object</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeliveryPipeline`<sup>Required</sup> <a name="DeliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.deliveryPipeline"></a>

```csharp
public string DeliveryPipeline { get; set; }
```

- *Type:* string

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#delivery_pipeline GoogleClouddeployAutomation#delivery_pipeline}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#location GoogleClouddeployAutomation#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#name GoogleClouddeployAutomation#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#rules GoogleClouddeployAutomation#rules}

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.selector"></a>

```csharp
public GoogleClouddeployAutomationSelector Selector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#selector GoogleClouddeployAutomation#selector}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#service_account GoogleClouddeployAutomation#service_account}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#annotations GoogleClouddeployAutomation#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#description GoogleClouddeployAutomation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}.

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.suspended"></a>

```csharp
public object Suspended { get; set; }
```

- *Type:* object

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#suspended GoogleClouddeployAutomation#suspended}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.timeouts"></a>

```csharp
public GoogleClouddeployAutomationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#timeouts GoogleClouddeployAutomation#timeouts}

---

### GoogleClouddeployAutomationRules <a name="GoogleClouddeployAutomationRules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRules {
    GoogleClouddeployAutomationRulesAdvanceRolloutRule AdvanceRolloutRule = null,
    GoogleClouddeployAutomationRulesPromoteReleaseRule PromoteReleaseRule = null,
    GoogleClouddeployAutomationRulesRepairRolloutRule RepairRolloutRule = null,
    GoogleClouddeployAutomationRulesTimedPromoteReleaseRule TimedPromoteReleaseRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.advanceRolloutRule">AdvanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | advance_rollout_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.promoteReleaseRule">PromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | promote_release_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.repairRolloutRule">RepairRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a></code> | repair_rollout_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.timedPromoteReleaseRule">TimedPromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | timed_promote_release_rule block. |

---

##### `AdvanceRolloutRule`<sup>Optional</sup> <a name="AdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.advanceRolloutRule"></a>

```csharp
public GoogleClouddeployAutomationRulesAdvanceRolloutRule AdvanceRolloutRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

advance_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#advance_rollout_rule GoogleClouddeployAutomation#advance_rollout_rule}

---

##### `PromoteReleaseRule`<sup>Optional</sup> <a name="PromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.promoteReleaseRule"></a>

```csharp
public GoogleClouddeployAutomationRulesPromoteReleaseRule PromoteReleaseRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#promote_release_rule GoogleClouddeployAutomation#promote_release_rule}

---

##### `RepairRolloutRule`<sup>Optional</sup> <a name="RepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.repairRolloutRule"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRule RepairRolloutRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

repair_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#repair_rollout_rule GoogleClouddeployAutomation#repair_rollout_rule}

---

##### `TimedPromoteReleaseRule`<sup>Optional</sup> <a name="TimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.timedPromoteReleaseRule"></a>

```csharp
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRule TimedPromoteReleaseRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

timed_promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#timed_promote_release_rule GoogleClouddeployAutomation#timed_promote_release_rule}

---

### GoogleClouddeployAutomationRulesAdvanceRolloutRule <a name="GoogleClouddeployAutomationRulesAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesAdvanceRolloutRule {
    string Id,
    string[] SourcePhases = null,
    string Wait = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.id">Id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases">SourcePhases</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.wait">Wait</a></code> | <code>string</code> | Optional. How long to wait after a rollout is finished. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourcePhases`<sup>Optional</sup> <a name="SourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases"></a>

```csharp
public string[] SourcePhases { get; set; }
```

- *Type:* string[]

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#source_phases GoogleClouddeployAutomation#source_phases}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.wait"></a>

```csharp
public string Wait { get; set; }
```

- *Type:* string

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesPromoteReleaseRule <a name="GoogleClouddeployAutomationRulesPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesPromoteReleaseRule {
    string Id,
    string DestinationPhase = null,
    string DestinationTargetId = null,
    string Wait = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.id">Id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase">DestinationPhase</a></code> | <code>string</code> | Optional. The starting phase of the rollout created by this operation. Default to the first phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId">DestinationTargetId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.wait">Wait</a></code> | <code>string</code> | Optional. How long the release need to be paused until being promoted to the next target. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `DestinationPhase`<sup>Optional</sup> <a name="DestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase"></a>

```csharp
public string DestinationPhase { get; set; }
```

- *Type:* string

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `DestinationTargetId`<sup>Optional</sup> <a name="DestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId"></a>

```csharp
public string DestinationTargetId { get; set; }
```

- *Type:* string

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.wait"></a>

```csharp
public string Wait { get; set; }
```

- *Type:* string

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesRepairRolloutRule <a name="GoogleClouddeployAutomationRulesRepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRule {
    string Id,
    string[] Jobs = null,
    string[] Phases = null,
    object RepairPhases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.id">Id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.jobs">Jobs</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.phases">Phases</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.repairPhases">RepairPhases</a></code> | <code>object</code> | repair_phases block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Jobs`<sup>Optional</sup> <a name="Jobs" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.jobs"></a>

```csharp
public string[] Jobs { get; set; }
```

- *Type:* string[]

Optional.

Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in sourcePhase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#jobs GoogleClouddeployAutomation#jobs}

---

##### `Phases`<sup>Optional</sup> <a name="Phases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.phases"></a>

```csharp
public string[] Phases { get; set; }
```

- *Type:* string[]

Optional.

Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#phases GoogleClouddeployAutomation#phases}

---

##### `RepairPhases`<sup>Optional</sup> <a name="RepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule.property.repairPhases"></a>

```csharp
public object RepairPhases { get; set; }
```

- *Type:* object

repair_phases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#repair_phases GoogleClouddeployAutomation#repair_phases}

---

### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases {
    GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry Retry = null,
    GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback Rollback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback">Rollback</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | rollback block. |

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#retry GoogleClouddeployAutomation#retry}

---

##### `Rollback`<sup>Optional</sup> <a name="Rollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback Rollback { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

rollback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#rollback GoogleClouddeployAutomation#rollback}

---

### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry {
    string Attempts,
    string BackoffMode = null,
    string Wait = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts">Attempts</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode">BackoffMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait">Wait</a></code> | <code>string</code> | Optional. |

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts"></a>

```csharp
public string Attempts { get; set; }
```

- *Type:* string

Required.

Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#attempts GoogleClouddeployAutomation#attempts}

---

##### `BackoffMode`<sup>Optional</sup> <a name="BackoffMode" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode"></a>

```csharp
public string BackoffMode { get; set; }
```

- *Type:* string

Optional.

The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if wait is 0. Possible values: ["BACKOFF_MODE_UNSPECIFIED", "BACKOFF_MODE_LINEAR", "BACKOFF_MODE_EXPONENTIAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#backoff_mode GoogleClouddeployAutomation#backoff_mode}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait"></a>

```csharp
public string Wait { get; set; }
```

- *Type:* string

Optional.

How long to wait for the first retry. Default is 0, and the maximum value is 14d. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback {
    string DestinationPhase = null,
    object DisableRollbackIfRolloutPending = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase">DestinationPhase</a></code> | <code>string</code> | Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending">DisableRollbackIfRolloutPending</a></code> | <code>object</code> | Optional. If pending rollout exists on the target, the rollback operation will be aborted. |

---

##### `DestinationPhase`<sup>Optional</sup> <a name="DestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase"></a>

```csharp
public string DestinationPhase { get; set; }
```

- *Type:* string

Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `DisableRollbackIfRolloutPending`<sup>Optional</sup> <a name="DisableRollbackIfRolloutPending" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending"></a>

```csharp
public object DisableRollbackIfRolloutPending { get; set; }
```

- *Type:* object

Optional. If pending rollout exists on the target, the rollback operation will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#disable_rollback_if_rollout_pending GoogleClouddeployAutomation#disable_rollback_if_rollout_pending}

---

### GoogleClouddeployAutomationRulesTimedPromoteReleaseRule <a name="GoogleClouddeployAutomationRulesTimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesTimedPromoteReleaseRule {
    string Id,
    string Schedule,
    string TimeZone,
    string DestinationPhase = null,
    string DestinationTargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.id">Id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule">Schedule</a></code> | <code>string</code> | Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone">TimeZone</a></code> | <code>string</code> | Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York). |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase">DestinationPhase</a></code> | <code>string</code> | Optional. The starting phase of the rollout created by this rule. Default to the first phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId">DestinationTargetId</a></code> | <code>string</code> | Optional. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#schedule GoogleClouddeployAutomation#schedule}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#time_zone GoogleClouddeployAutomation#time_zone}

---

##### `DestinationPhase`<sup>Optional</sup> <a name="DestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase"></a>

```csharp
public string DestinationPhase { get; set; }
```

- *Type:* string

Optional. The starting phase of the rollout created by this rule. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `DestinationTargetId`<sup>Optional</sup> <a name="DestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId"></a>

```csharp
public string DestinationTargetId { get; set; }
```

- *Type:* string

Optional.

The ID of the stage in the pipeline to which this Release is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following:

* The last segment of a target name
* "@next", the next target in the promotion sequence"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}

---

### GoogleClouddeployAutomationSelector <a name="GoogleClouddeployAutomationSelector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationSelector {
    object Targets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.property.targets">Targets</a></code> | <code>object</code> | targets block. |

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#targets GoogleClouddeployAutomation#targets}

---

### GoogleClouddeployAutomationSelectorTargets <a name="GoogleClouddeployAutomationSelectorTargets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationSelectorTargets {
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.id">Id</a></code> | <code>string</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Target labels. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

### GoogleClouddeployAutomationTimeouts <a name="GoogleClouddeployAutomationTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference <a name="GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases">ResetSourcePhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourcePhases` <a name="ResetSourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases"></a>

```csharp
private void ResetSourcePhases()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait"></a>

```csharp
private void ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput">SourcePhasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput">WaitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases">SourcePhases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait">Wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SourcePhasesInput`<sup>Optional</sup> <a name="SourcePhasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput"></a>

```csharp
public string[] SourcePhasesInput { get; }
```

- *Type:* string[]

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput"></a>

```csharp
public string WaitInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SourcePhases`<sup>Required</sup> <a name="SourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases"></a>

```csharp
public string[] SourcePhases { get; }
```

- *Type:* string[]

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait"></a>

```csharp
public string Wait { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationRulesAdvanceRolloutRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---


### GoogleClouddeployAutomationRulesList <a name="GoogleClouddeployAutomationRulesList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get"></a>

```csharp
private GoogleClouddeployAutomationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployAutomationRulesOutputReference <a name="GoogleClouddeployAutomationRulesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule">PutAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule">PutPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putRepairRolloutRule">PutRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule">PutTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule">ResetAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule">ResetPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetRepairRolloutRule">ResetRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule">ResetTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvanceRolloutRule` <a name="PutAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule"></a>

```csharp
private void PutAdvanceRolloutRule(GoogleClouddeployAutomationRulesAdvanceRolloutRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `PutPromoteReleaseRule` <a name="PutPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule"></a>

```csharp
private void PutPromoteReleaseRule(GoogleClouddeployAutomationRulesPromoteReleaseRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `PutRepairRolloutRule` <a name="PutRepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putRepairRolloutRule"></a>

```csharp
private void PutRepairRolloutRule(GoogleClouddeployAutomationRulesRepairRolloutRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `PutTimedPromoteReleaseRule` <a name="PutTimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule"></a>

```csharp
private void PutTimedPromoteReleaseRule(GoogleClouddeployAutomationRulesTimedPromoteReleaseRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `ResetAdvanceRolloutRule` <a name="ResetAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule"></a>

```csharp
private void ResetAdvanceRolloutRule()
```

##### `ResetPromoteReleaseRule` <a name="ResetPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule"></a>

```csharp
private void ResetPromoteReleaseRule()
```

##### `ResetRepairRolloutRule` <a name="ResetRepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetRepairRolloutRule"></a>

```csharp
private void ResetRepairRolloutRule()
```

##### `ResetTimedPromoteReleaseRule` <a name="ResetTimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule"></a>

```csharp
private void ResetTimedPromoteReleaseRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRule">AdvanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRule">PromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRule">RepairRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule">TimedPromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput">AdvanceRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput">PromoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput">RepairRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput">TimedPromoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvanceRolloutRule`<sup>Required</sup> <a name="AdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRule"></a>

```csharp
public GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference AdvanceRolloutRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a>

---

##### `PromoteReleaseRule`<sup>Required</sup> <a name="PromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRule"></a>

```csharp
public GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference PromoteReleaseRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a>

---

##### `RepairRolloutRule`<sup>Required</sup> <a name="RepairRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRule"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference RepairRolloutRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference</a>

---

##### `TimedPromoteReleaseRule`<sup>Required</sup> <a name="TimedPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule"></a>

```csharp
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference TimedPromoteReleaseRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a>

---

##### `AdvanceRolloutRuleInput`<sup>Optional</sup> <a name="AdvanceRolloutRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput"></a>

```csharp
public GoogleClouddeployAutomationRulesAdvanceRolloutRule AdvanceRolloutRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `PromoteReleaseRuleInput`<sup>Optional</sup> <a name="PromoteReleaseRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput"></a>

```csharp
public GoogleClouddeployAutomationRulesPromoteReleaseRule PromoteReleaseRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `RepairRolloutRuleInput`<sup>Optional</sup> <a name="RepairRolloutRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRule RepairRolloutRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `TimedPromoteReleaseRuleInput`<sup>Optional</sup> <a name="TimedPromoteReleaseRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput"></a>

```csharp
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRule TimedPromoteReleaseRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference <a name="GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase">ResetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId">ResetDestinationTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhase` <a name="ResetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```csharp
private void ResetDestinationPhase()
```

##### `ResetDestinationTargetId` <a name="ResetDestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```csharp
private void ResetDestinationTargetId()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait"></a>

```csharp
private void ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput">DestinationPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">DestinationTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput">WaitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase">DestinationPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId">DestinationTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait">Wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPhaseInput`<sup>Optional</sup> <a name="DestinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```csharp
public string DestinationPhaseInput { get; }
```

- *Type:* string

---

##### `DestinationTargetIdInput`<sup>Optional</sup> <a name="DestinationTargetIdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```csharp
public string DestinationTargetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput"></a>

```csharp
public string WaitInput { get; }
```

- *Type:* string

---

##### `DestinationPhase`<sup>Required</sup> <a name="DestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```csharp
public string DestinationPhase { get; }
```

- *Type:* string

---

##### `DestinationTargetId`<sup>Required</sup> <a name="DestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```csharp
public string DestinationTargetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait"></a>

```csharp
public string Wait { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationRulesPromoteReleaseRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases">PutRepairPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs">ResetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases">ResetPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases">ResetRepairPhases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepairPhases` <a name="PutRepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases"></a>

```csharp
private void PutRepairPhases(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases.parameter.value"></a>

- *Type:* object

---

##### `ResetJobs` <a name="ResetJobs" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs"></a>

```csharp
private void ResetJobs()
```

##### `ResetPhases` <a name="ResetPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases"></a>

```csharp
private void ResetPhases()
```

##### `ResetRepairPhases` <a name="ResetRepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases"></a>

```csharp
private void ResetRepairPhases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases">RepairPhases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput">JobsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput">PhasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput">RepairPhasesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs">Jobs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases">Phases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepairPhases`<sup>Required</sup> <a name="RepairPhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList RepairPhases { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobsInput`<sup>Optional</sup> <a name="JobsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput"></a>

```csharp
public string[] JobsInput { get; }
```

- *Type:* string[]

---

##### `PhasesInput`<sup>Optional</sup> <a name="PhasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput"></a>

```csharp
public string[] PhasesInput { get; }
```

- *Type:* string[]

---

##### `RepairPhasesInput`<sup>Optional</sup> <a name="RepairPhasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput"></a>

```csharp
public object RepairPhasesInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Jobs`<sup>Required</sup> <a name="Jobs" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs"></a>

```csharp
public string[] Jobs { get; }
```

- *Type:* string[]

---

##### `Phases`<sup>Required</sup> <a name="Phases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases"></a>

```csharp
public string[] Phases { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRule">GoogleClouddeployAutomationRulesRepairRolloutRule</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get"></a>

```csharp
private GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback">PutRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback">ResetRollback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetry` <a name="PutRetry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry"></a>

```csharp
private void PutRetry(GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `PutRollback` <a name="PutRollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback"></a>

```csharp
private void PutRollback(GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetRollback` <a name="ResetRollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback"></a>

```csharp
private void ResetRollback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback">Rollback</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput">RetryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput">RollbackInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a>

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference Rollback { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry RetryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `RollbackInput`<sup>Optional</sup> <a name="RollbackInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback RollbackInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode">ResetBackoffMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackoffMode` <a name="ResetBackoffMode" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode"></a>

```csharp
private void ResetBackoffMode()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait"></a>

```csharp
private void ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput">AttemptsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput">BackoffModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput">WaitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts">Attempts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode">BackoffMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait">Wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttemptsInput`<sup>Optional</sup> <a name="AttemptsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput"></a>

```csharp
public string AttemptsInput { get; }
```

- *Type:* string

---

##### `BackoffModeInput`<sup>Optional</sup> <a name="BackoffModeInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput"></a>

```csharp
public string BackoffModeInput { get; }
```

- *Type:* string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput"></a>

```csharp
public string WaitInput { get; }
```

- *Type:* string

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts"></a>

```csharp
public string Attempts { get; }
```

- *Type:* string

---

##### `BackoffMode`<sup>Required</sup> <a name="BackoffMode" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode"></a>

```csharp
public string BackoffMode { get; }
```

- *Type:* string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait"></a>

```csharp
public string Wait { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---


### GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference <a name="GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase">ResetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending">ResetDisableRollbackIfRolloutPending</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhase` <a name="ResetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase"></a>

```csharp
private void ResetDestinationPhase()
```

##### `ResetDisableRollbackIfRolloutPending` <a name="ResetDisableRollbackIfRolloutPending" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending"></a>

```csharp
private void ResetDisableRollbackIfRolloutPending()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput">DestinationPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput">DisableRollbackIfRolloutPendingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase">DestinationPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending">DisableRollbackIfRolloutPending</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPhaseInput`<sup>Optional</sup> <a name="DestinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput"></a>

```csharp
public string DestinationPhaseInput { get; }
```

- *Type:* string

---

##### `DisableRollbackIfRolloutPendingInput`<sup>Optional</sup> <a name="DisableRollbackIfRolloutPendingInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput"></a>

```csharp
public object DisableRollbackIfRolloutPendingInput { get; }
```

- *Type:* object

---

##### `DestinationPhase`<sup>Required</sup> <a name="DestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase"></a>

```csharp
public string DestinationPhase { get; }
```

- *Type:* string

---

##### `DisableRollbackIfRolloutPending`<sup>Required</sup> <a name="DisableRollbackIfRolloutPending" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending"></a>

```csharp
public object DisableRollbackIfRolloutPending { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">GoogleClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---


### GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference <a name="GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase">ResetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId">ResetDestinationTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhase` <a name="ResetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```csharp
private void ResetDestinationPhase()
```

##### `ResetDestinationTargetId` <a name="ResetDestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```csharp
private void ResetDestinationTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput">DestinationPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">DestinationTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase">DestinationPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId">DestinationTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPhaseInput`<sup>Optional</sup> <a name="DestinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```csharp
public string DestinationPhaseInput { get; }
```

- *Type:* string

---

##### `DestinationTargetIdInput`<sup>Optional</sup> <a name="DestinationTargetIdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```csharp
public string DestinationTargetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `DestinationPhase`<sup>Required</sup> <a name="DestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```csharp
public string DestinationPhase { get; }
```

- *Type:* string

---

##### `DestinationTargetId`<sup>Required</sup> <a name="DestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```csharp
public string DestinationTargetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationRulesTimedPromoteReleaseRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesTimedPromoteReleaseRule">GoogleClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---


### GoogleClouddeployAutomationSelectorOutputReference <a name="GoogleClouddeployAutomationSelectorOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets">PutTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList">GoogleClouddeployAutomationSelectorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targets"></a>

```csharp
public GoogleClouddeployAutomationSelectorTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList">GoogleClouddeployAutomationSelectorTargetsList</a>

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployAutomationSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---


### GoogleClouddeployAutomationSelectorTargetsList <a name="GoogleClouddeployAutomationSelectorTargetsList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationSelectorTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get"></a>

```csharp
private GoogleClouddeployAutomationSelectorTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployAutomationSelectorTargetsOutputReference <a name="GoogleClouddeployAutomationSelectorTargetsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationSelectorTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployAutomationTimeoutsOutputReference <a name="GoogleClouddeployAutomationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployAutomationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



