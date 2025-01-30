# `googleDataplexTask` Submodule <a name="`googleDataplexTask` Submodule" id="@cdktf/provider-google-beta.googleDataplexTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexTask <a name="GoogleDataplexTask" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task google_dataplex_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTask(Construct Scope, string Id, GoogleDataplexTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig">GoogleDataplexTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig">GoogleDataplexTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec">PutExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark">PutSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec">PutTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLake">ResetLake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetSpark">ResetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTaskId">ResetTaskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExecutionSpec` <a name="PutExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec"></a>

```csharp
private void PutExecutionSpec(GoogleDataplexTaskExecutionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook"></a>

```csharp
private void PutNotebook(GoogleDataplexTaskNotebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---

##### `PutSpark` <a name="PutSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark"></a>

```csharp
private void PutSpark(GoogleDataplexTaskSpark Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataplexTaskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

---

##### `PutTriggerSpec` <a name="PutTriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec"></a>

```csharp
private void PutTriggerSpec(GoogleDataplexTaskTriggerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLake` <a name="ResetLake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLake"></a>

```csharp
private void ResetLake()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetNotebook"></a>

```csharp
private void ResetNotebook()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSpark` <a name="ResetSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetSpark"></a>

```csharp
private void ResetSpark()
```

##### `ResetTaskId` <a name="ResetTaskId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTaskId"></a>

```csharp
private void ResetTaskId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference">GoogleDataplexTaskExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList">GoogleDataplexTaskExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference">GoogleDataplexTaskNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference">GoogleDataplexTaskSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference">GoogleDataplexTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpec">TriggerSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference">GoogleDataplexTaskTriggerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpecInput">ExecutionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lakeInput">LakeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebookInput">NotebookInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.sparkInput">SparkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskIdInput">TaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpecInput">TriggerSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lake">Lake</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskId">TaskId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpec"></a>

```csharp
public GoogleDataplexTaskExecutionSpecOutputReference ExecutionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference">GoogleDataplexTaskExecutionSpecOutputReference</a>

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionStatus"></a>

```csharp
public GoogleDataplexTaskExecutionStatusList ExecutionStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList">GoogleDataplexTaskExecutionStatusList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebook"></a>

```csharp
public GoogleDataplexTaskNotebookOutputReference Notebook { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference">GoogleDataplexTaskNotebookOutputReference</a>

---

##### `Spark`<sup>Required</sup> <a name="Spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.spark"></a>

```csharp
public GoogleDataplexTaskSparkOutputReference Spark { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference">GoogleDataplexTaskSparkOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeouts"></a>

```csharp
public GoogleDataplexTaskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference">GoogleDataplexTaskTimeoutsOutputReference</a>

---

##### `TriggerSpec`<sup>Required</sup> <a name="TriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpec"></a>

```csharp
public GoogleDataplexTaskTriggerSpecOutputReference TriggerSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference">GoogleDataplexTaskTriggerSpecOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExecutionSpecInput`<sup>Optional</sup> <a name="ExecutionSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpecInput"></a>

```csharp
public GoogleDataplexTaskExecutionSpec ExecutionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LakeInput`<sup>Optional</sup> <a name="LakeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lakeInput"></a>

```csharp
public string LakeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebookInput"></a>

```csharp
public GoogleDataplexTaskNotebook NotebookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SparkInput`<sup>Optional</sup> <a name="SparkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.sparkInput"></a>

```csharp
public GoogleDataplexTaskSpark SparkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---

##### `TaskIdInput`<sup>Optional</sup> <a name="TaskIdInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskIdInput"></a>

```csharp
public string TaskIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggerSpecInput`<sup>Optional</sup> <a name="TriggerSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpecInput"></a>

```csharp
public GoogleDataplexTaskTriggerSpec TriggerSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lake"></a>

```csharp
public string Lake { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskId"></a>

```csharp
public string TaskId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexTaskConfig <a name="GoogleDataplexTaskConfig" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleDataplexTaskExecutionSpec ExecutionSpec,
    GoogleDataplexTaskTriggerSpec TriggerSpec,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Lake = null,
    string Location = null,
    GoogleDataplexTaskNotebook Notebook = null,
    string Project = null,
    GoogleDataplexTaskSpark Spark = null,
    string TaskId = null,
    GoogleDataplexTaskTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.triggerSpec">TriggerSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.description">Description</a></code> | <code>string</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lake">Lake</a></code> | <code>string</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.location">Location</a></code> | <code>string</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.taskId">TaskId</a></code> | <code>string</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.executionSpec"></a>

```csharp
public GoogleDataplexTaskExecutionSpec ExecutionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#execution_spec GoogleDataplexTask#execution_spec}

---

##### `TriggerSpec`<sup>Required</sup> <a name="TriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.triggerSpec"></a>

```csharp
public GoogleDataplexTaskTriggerSpec TriggerSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#trigger_spec GoogleDataplexTask#trigger_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#description GoogleDataplexTask#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#display_name GoogleDataplexTask#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#labels GoogleDataplexTask#labels}

---

##### `Lake`<sup>Optional</sup> <a name="Lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lake"></a>

```csharp
public string Lake { get; set; }
```

- *Type:* string

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#lake GoogleDataplexTask#lake}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#location GoogleDataplexTask#location}

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.notebook"></a>

```csharp
public GoogleDataplexTaskNotebook Notebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}.

---

##### `Spark`<sup>Optional</sup> <a name="Spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.spark"></a>

```csharp
public GoogleDataplexTaskSpark Spark { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#spark GoogleDataplexTask#spark}

---

##### `TaskId`<sup>Optional</sup> <a name="TaskId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.taskId"></a>

```csharp
public string TaskId { get; set; }
```

- *Type:* string

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#task_id GoogleDataplexTask#task_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.timeouts"></a>

```csharp
public GoogleDataplexTaskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#timeouts GoogleDataplexTask#timeouts}

---

### GoogleDataplexTaskExecutionSpec <a name="GoogleDataplexTaskExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionSpec {
    string ServiceAccount,
    System.Collections.Generic.IDictionary<string, string> Args = null,
    string KmsKey = null,
    string MaxJobExecutionLifetime = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account to use to execute a task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.args">Args</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The arguments to pass to the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.maxJobExecutionLifetime">MaxJobExecutionLifetime</a></code> | <code>string</code> | The maximum duration after which the job execution is expired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.project">Project</a></code> | <code>string</code> | The project in which jobs are run. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#service_account GoogleDataplexTask#service_account}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.args"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Args { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#args GoogleDataplexTask#args}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#kms_key GoogleDataplexTask#kms_key}

---

##### `MaxJobExecutionLifetime`<sup>Optional</sup> <a name="MaxJobExecutionLifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.maxJobExecutionLifetime"></a>

```csharp
public string MaxJobExecutionLifetime { get; set; }
```

- *Type:* string

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#max_job_execution_lifetime GoogleDataplexTask#max_job_execution_lifetime}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}

---

### GoogleDataplexTaskExecutionStatus <a name="GoogleDataplexTaskExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionStatus {

};
```


### GoogleDataplexTaskExecutionStatusLatestJob <a name="GoogleDataplexTaskExecutionStatusLatestJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionStatusLatestJob {

};
```


### GoogleDataplexTaskNotebook <a name="GoogleDataplexTaskNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebook {
    string Notebook,
    string[] ArchiveUris = null,
    string[] FileUris = null,
    GoogleDataplexTaskNotebookInfrastructureSpec InfrastructureSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.notebook">Notebook</a></code> | <code>string</code> | Path to input notebook. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.fileUris">FileUris</a></code> | <code>string[]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.infrastructureSpec">InfrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | infrastructure_spec block. |

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.notebook"></a>

```csharp
public string Notebook { get; set; }
```

- *Type:* string

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

##### `InfrastructureSpec`<sup>Optional</sup> <a name="InfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.infrastructureSpec"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpec InfrastructureSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

### GoogleDataplexTaskNotebookInfrastructureSpec <a name="GoogleDataplexTaskNotebookInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpec {
    GoogleDataplexTaskNotebookInfrastructureSpecBatch Batch = null,
    GoogleDataplexTaskNotebookInfrastructureSpecContainerImage ContainerImage = null,
    GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork VpcNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.batch">Batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.vpcNetwork">VpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `Batch`<sup>Optional</sup> <a name="Batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.batch"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecBatch Batch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.containerImage"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecContainerImage ContainerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

##### `VpcNetwork`<sup>Optional</sup> <a name="VpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.vpcNetwork"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork VpcNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

### GoogleDataplexTaskNotebookInfrastructureSpecBatch <a name="GoogleDataplexTaskNotebookInfrastructureSpecBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecBatch {
    double ExecutorsCount = null,
    double MaxExecutorsCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount">ExecutorsCount</a></code> | <code>double</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount">MaxExecutorsCount</a></code> | <code>double</code> | Max configurable executors. |

---

##### `ExecutorsCount`<sup>Optional</sup> <a name="ExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount"></a>

```csharp
public double ExecutorsCount { get; set; }
```

- *Type:* double

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

##### `MaxExecutorsCount`<sup>Optional</sup> <a name="MaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```csharp
public double MaxExecutorsCount { get; set; }
```

- *Type:* double

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

### GoogleDataplexTaskNotebookInfrastructureSpecContainerImage <a name="GoogleDataplexTaskNotebookInfrastructureSpecContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecContainerImage {
    string Image = null,
    string[] JavaJars = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string[] PythonPackages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.image">Image</a></code> | <code>string</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars">JavaJars</a></code> | <code>string[]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages">PythonPackages</a></code> | <code>string[]</code> | A list of python packages to be installed. |

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

##### `JavaJars`<sup>Optional</sup> <a name="JavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars"></a>

```csharp
public string[] JavaJars { get; set; }
```

- *Type:* string[]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

##### `PythonPackages`<sup>Optional</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages"></a>

```csharp
public string[] PythonPackages { get; set; }
```

- *Type:* string[]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

### GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork <a name="GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork {
    string Network = null,
    string[] NetworkTags = null,
    string SubNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network">Network</a></code> | <code>string</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork">SubNetwork</a></code> | <code>string</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

##### `SubNetwork`<sup>Optional</sup> <a name="SubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```csharp
public string SubNetwork { get; set; }
```

- *Type:* string

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

### GoogleDataplexTaskSpark <a name="GoogleDataplexTaskSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSpark {
    string[] ArchiveUris = null,
    string[] FileUris = null,
    GoogleDataplexTaskSparkInfrastructureSpec InfrastructureSpec = null,
    string MainClass = null,
    string MainJarFileUri = null,
    string PythonScriptFile = null,
    string SqlScript = null,
    string SqlScriptFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.fileUris">FileUris</a></code> | <code>string[]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.infrastructureSpec">InfrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | infrastructure_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainClass">MainClass</a></code> | <code>string</code> | The name of the driver's main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | The Cloud Storage URI of the jar file that contains the main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.pythonScriptFile">PythonScriptFile</a></code> | <code>string</code> | The Gcloud Storage URI of the main Python file to use as the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScript">SqlScript</a></code> | <code>string</code> | The query text. The execution args are used to declare a set of script variables (set key='value';). |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScriptFile">SqlScriptFile</a></code> | <code>string</code> | A reference to a query file. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

##### `InfrastructureSpec`<sup>Optional</sup> <a name="InfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.infrastructureSpec"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpec InfrastructureSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainClass"></a>

```csharp
public string MainClass { get; set; }
```

- *Type:* string

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#main_class GoogleDataplexTask#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; set; }
```

- *Type:* string

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#main_jar_file_uri GoogleDataplexTask#main_jar_file_uri}

---

##### `PythonScriptFile`<sup>Optional</sup> <a name="PythonScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.pythonScriptFile"></a>

```csharp
public string PythonScriptFile { get; set; }
```

- *Type:* string

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#python_script_file GoogleDataplexTask#python_script_file}

---

##### `SqlScript`<sup>Optional</sup> <a name="SqlScript" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScript"></a>

```csharp
public string SqlScript { get; set; }
```

- *Type:* string

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#sql_script GoogleDataplexTask#sql_script}

---

##### `SqlScriptFile`<sup>Optional</sup> <a name="SqlScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScriptFile"></a>

```csharp
public string SqlScriptFile { get; set; }
```

- *Type:* string

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#sql_script_file GoogleDataplexTask#sql_script_file}

---

### GoogleDataplexTaskSparkInfrastructureSpec <a name="GoogleDataplexTaskSparkInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpec {
    GoogleDataplexTaskSparkInfrastructureSpecBatch Batch = null,
    GoogleDataplexTaskSparkInfrastructureSpecContainerImage ContainerImage = null,
    GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork VpcNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.batch">Batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.vpcNetwork">VpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `Batch`<sup>Optional</sup> <a name="Batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.batch"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecBatch Batch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.containerImage"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecContainerImage ContainerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

##### `VpcNetwork`<sup>Optional</sup> <a name="VpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.vpcNetwork"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork VpcNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

### GoogleDataplexTaskSparkInfrastructureSpecBatch <a name="GoogleDataplexTaskSparkInfrastructureSpecBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecBatch {
    double ExecutorsCount = null,
    double MaxExecutorsCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.executorsCount">ExecutorsCount</a></code> | <code>double</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount">MaxExecutorsCount</a></code> | <code>double</code> | Max configurable executors. |

---

##### `ExecutorsCount`<sup>Optional</sup> <a name="ExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.executorsCount"></a>

```csharp
public double ExecutorsCount { get; set; }
```

- *Type:* double

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

##### `MaxExecutorsCount`<sup>Optional</sup> <a name="MaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```csharp
public double MaxExecutorsCount { get; set; }
```

- *Type:* double

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

### GoogleDataplexTaskSparkInfrastructureSpecContainerImage <a name="GoogleDataplexTaskSparkInfrastructureSpecContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecContainerImage {
    string Image = null,
    string[] JavaJars = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string[] PythonPackages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.image">Image</a></code> | <code>string</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars">JavaJars</a></code> | <code>string[]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages">PythonPackages</a></code> | <code>string[]</code> | A list of python packages to be installed. |

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

##### `JavaJars`<sup>Optional</sup> <a name="JavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars"></a>

```csharp
public string[] JavaJars { get; set; }
```

- *Type:* string[]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

##### `PythonPackages`<sup>Optional</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages"></a>

```csharp
public string[] PythonPackages { get; set; }
```

- *Type:* string[]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

### GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork <a name="GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork {
    string Network = null,
    string[] NetworkTags = null,
    string SubNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.network">Network</a></code> | <code>string</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork">SubNetwork</a></code> | <code>string</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

##### `SubNetwork`<sup>Optional</sup> <a name="SubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```csharp
public string SubNetwork { get; set; }
```

- *Type:* string

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

### GoogleDataplexTaskTimeouts <a name="GoogleDataplexTaskTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}.

---

### GoogleDataplexTaskTriggerSpec <a name="GoogleDataplexTaskTriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskTriggerSpec {
    string Type,
    object Disabled = null,
    double MaxRetries = null,
    string Schedule = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.type">Type</a></code> | <code>string</code> | Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.disabled">Disabled</a></code> | <code>object</code> | Prevent the task from executing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.schedule">Schedule</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.startTime">StartTime</a></code> | <code>string</code> | The first run of the task will be after this time. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#type GoogleDataplexTask#type}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#disabled GoogleDataplexTask#disabled}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#max_retries GoogleDataplexTask#max_retries}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#schedule GoogleDataplexTask#schedule}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataplex_task#start_time GoogleDataplexTask#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexTaskExecutionSpecOutputReference <a name="GoogleDataplexTaskExecutionSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime">ResetMaxJobExecutionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetMaxJobExecutionLifetime` <a name="ResetMaxJobExecutionLifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime"></a>

```csharp
private void ResetMaxJobExecutionLifetime()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput">MaxJobExecutionLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.args">Args</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime">MaxJobExecutionLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.argsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ArgsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `MaxJobExecutionLifetimeInput`<sup>Optional</sup> <a name="MaxJobExecutionLifetimeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput"></a>

```csharp
public string MaxJobExecutionLifetimeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.args"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Args { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `MaxJobExecutionLifetime`<sup>Required</sup> <a name="MaxJobExecutionLifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime"></a>

```csharp
public string MaxJobExecutionLifetime { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskExecutionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---


### GoogleDataplexTaskExecutionStatusLatestJobList <a name="GoogleDataplexTaskExecutionStatusLatestJobList" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionStatusLatestJobList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get"></a>

```csharp
private GoogleDataplexTaskExecutionStatusLatestJobOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDataplexTaskExecutionStatusLatestJobOutputReference <a name="GoogleDataplexTaskExecutionStatusLatestJobOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionStatusLatestJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount">RetryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob">ServiceJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob">GoogleDataplexTaskExecutionStatusLatestJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetryCount`<sup>Required</sup> <a name="RetryCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount"></a>

```csharp
public double RetryCount { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceJob`<sup>Required</sup> <a name="ServiceJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob"></a>

```csharp
public string ServiceJob { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskExecutionStatusLatestJob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob">GoogleDataplexTaskExecutionStatusLatestJob</a>

---


### GoogleDataplexTaskExecutionStatusList <a name="GoogleDataplexTaskExecutionStatusList" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get"></a>

```csharp
private GoogleDataplexTaskExecutionStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDataplexTaskExecutionStatusOutputReference <a name="GoogleDataplexTaskExecutionStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskExecutionStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.latestJob">LatestJob</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList">GoogleDataplexTaskExecutionStatusLatestJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus">GoogleDataplexTaskExecutionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestJob`<sup>Required</sup> <a name="LatestJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.latestJob"></a>

```csharp
public GoogleDataplexTaskExecutionStatusLatestJobList LatestJob { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList">GoogleDataplexTaskExecutionStatusLatestJobList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskExecutionStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus">GoogleDataplexTaskExecutionStatus</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount">ResetExecutorsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">ResetMaxExecutorsCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutorsCount` <a name="ResetExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```csharp
private void ResetExecutorsCount()
```

##### `ResetMaxExecutorsCount` <a name="ResetMaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```csharp
private void ResetMaxExecutorsCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput">ExecutorsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">MaxExecutorsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount">ExecutorsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">MaxExecutorsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutorsCountInput`<sup>Optional</sup> <a name="ExecutorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```csharp
public double ExecutorsCountInput { get; }
```

- *Type:* double

---

##### `MaxExecutorsCountInput`<sup>Optional</sup> <a name="MaxExecutorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```csharp
public double MaxExecutorsCountInput { get; }
```

- *Type:* double

---

##### `ExecutorsCount`<sup>Required</sup> <a name="ExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```csharp
public double ExecutorsCount { get; }
```

- *Type:* double

---

##### `MaxExecutorsCount`<sup>Required</sup> <a name="MaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```csharp
public double MaxExecutorsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars">ResetJavaJars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages">ResetPythonPackages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetJavaJars` <a name="ResetJavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```csharp
private void ResetJavaJars()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetPythonPackages` <a name="ResetPythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```csharp
private void ResetPythonPackages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">JavaJarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">PythonPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars">JavaJars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages">PythonPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `JavaJarsInput`<sup>Optional</sup> <a name="JavaJarsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```csharp
public string[] JavaJarsInput { get; }
```

- *Type:* string[]

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PythonPackagesInput`<sup>Optional</sup> <a name="PythonPackagesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```csharp
public string[] PythonPackagesInput { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `JavaJars`<sup>Required</sup> <a name="JavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```csharp
public string[] JavaJars { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PythonPackages`<sup>Required</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```csharp
public string[] PythonPackages { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecContainerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch">PutBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork">PutVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch">ResetBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork">ResetVpcNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatch` <a name="PutBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch"></a>

```csharp
private void PutBatch(GoogleDataplexTaskNotebookInfrastructureSpecBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage"></a>

```csharp
private void PutContainerImage(GoogleDataplexTaskNotebookInfrastructureSpecContainerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `PutVpcNetwork` <a name="PutVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork"></a>

```csharp
private void PutVpcNetwork(GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `ResetBatch` <a name="ResetBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch"></a>

```csharp
private void ResetBatch()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetVpcNetwork` <a name="ResetVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```csharp
private void ResetVpcNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batch">Batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork">VpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput">BatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput">VpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batch"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference Batch { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference</a>

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference ContainerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a>

---

##### `VpcNetwork`<sup>Required</sup> <a name="VpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference VpcNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecBatch BatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecContainerImage ContainerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `VpcNetworkInput`<sup>Optional</sup> <a name="VpcNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork VpcNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">ResetSubNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetSubNetwork` <a name="ResetSubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```csharp
private void ResetSubNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">SubNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">SubNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `SubNetworkInput`<sup>Optional</sup> <a name="SubNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```csharp
public string SubNetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `SubNetwork`<sup>Required</sup> <a name="SubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```csharp
public string SubNetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---


### GoogleDataplexTaskNotebookOutputReference <a name="GoogleDataplexTaskNotebookOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskNotebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec">PutInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetInfrastructureSpec">ResetInfrastructureSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfrastructureSpec` <a name="PutInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec"></a>

```csharp
private void PutInfrastructureSpec(GoogleDataplexTaskNotebookInfrastructureSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetInfrastructureSpec` <a name="ResetInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetInfrastructureSpec"></a>

```csharp
private void ResetInfrastructureSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpec">InfrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpecInput">InfrastructureSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebookInput">NotebookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebook">Notebook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InfrastructureSpec`<sup>Required</sup> <a name="InfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpec"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpecOutputReference InfrastructureSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `InfrastructureSpecInput`<sup>Optional</sup> <a name="InfrastructureSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpecInput"></a>

```csharp
public GoogleDataplexTaskNotebookInfrastructureSpec InfrastructureSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebookInput"></a>

```csharp
public string NotebookInput { get; }
```

- *Type:* string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebook"></a>

```csharp
public string Notebook { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskNotebook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount">ResetExecutorsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">ResetMaxExecutorsCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutorsCount` <a name="ResetExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```csharp
private void ResetExecutorsCount()
```

##### `ResetMaxExecutorsCount` <a name="ResetMaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```csharp
private void ResetMaxExecutorsCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput">ExecutorsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">MaxExecutorsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount">ExecutorsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">MaxExecutorsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutorsCountInput`<sup>Optional</sup> <a name="ExecutorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```csharp
public double ExecutorsCountInput { get; }
```

- *Type:* double

---

##### `MaxExecutorsCountInput`<sup>Optional</sup> <a name="MaxExecutorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```csharp
public double MaxExecutorsCountInput { get; }
```

- *Type:* double

---

##### `ExecutorsCount`<sup>Required</sup> <a name="ExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```csharp
public double ExecutorsCount { get; }
```

- *Type:* double

---

##### `MaxExecutorsCount`<sup>Required</sup> <a name="MaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```csharp
public double MaxExecutorsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars">ResetJavaJars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages">ResetPythonPackages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetJavaJars` <a name="ResetJavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```csharp
private void ResetJavaJars()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetPythonPackages` <a name="ResetPythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```csharp
private void ResetPythonPackages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">JavaJarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">PythonPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars">JavaJars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages">PythonPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `JavaJarsInput`<sup>Optional</sup> <a name="JavaJarsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```csharp
public string[] JavaJarsInput { get; }
```

- *Type:* string[]

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PythonPackagesInput`<sup>Optional</sup> <a name="PythonPackagesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```csharp
public string[] PythonPackagesInput { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `JavaJars`<sup>Required</sup> <a name="JavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```csharp
public string[] JavaJars { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PythonPackages`<sup>Required</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```csharp
public string[] PythonPackages { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecContainerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch">PutBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork">PutVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetBatch">ResetBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork">ResetVpcNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatch` <a name="PutBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch"></a>

```csharp
private void PutBatch(GoogleDataplexTaskSparkInfrastructureSpecBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage"></a>

```csharp
private void PutContainerImage(GoogleDataplexTaskSparkInfrastructureSpecContainerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `PutVpcNetwork` <a name="PutVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork"></a>

```csharp
private void PutVpcNetwork(GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `ResetBatch` <a name="ResetBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetBatch"></a>

```csharp
private void ResetBatch()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetVpcNetwork` <a name="ResetVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```csharp
private void ResetVpcNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batch">Batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference">GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork">VpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput">BatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput">VpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batch"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference Batch { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference">GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference</a>

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference ContainerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a>

---

##### `VpcNetwork`<sup>Required</sup> <a name="VpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference VpcNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecBatch BatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecContainerImage ContainerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `VpcNetworkInput`<sup>Optional</sup> <a name="VpcNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork VpcNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">ResetSubNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetSubNetwork` <a name="ResetSubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```csharp
private void ResetSubNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">SubNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">SubNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `SubNetworkInput`<sup>Optional</sup> <a name="SubNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```csharp
public string SubNetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `SubNetwork`<sup>Required</sup> <a name="SubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```csharp
public string SubNetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---


### GoogleDataplexTaskSparkOutputReference <a name="GoogleDataplexTaskSparkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskSparkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec">PutInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetInfrastructureSpec">ResetInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetPythonScriptFile">ResetPythonScriptFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScript">ResetSqlScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScriptFile">ResetSqlScriptFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfrastructureSpec` <a name="PutInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec"></a>

```csharp
private void PutInfrastructureSpec(GoogleDataplexTaskSparkInfrastructureSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetInfrastructureSpec` <a name="ResetInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetInfrastructureSpec"></a>

```csharp
private void ResetInfrastructureSpec()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainClass"></a>

```csharp
private void ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainJarFileUri"></a>

```csharp
private void ResetMainJarFileUri()
```

##### `ResetPythonScriptFile` <a name="ResetPythonScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetPythonScriptFile"></a>

```csharp
private void ResetPythonScriptFile()
```

##### `ResetSqlScript` <a name="ResetSqlScript" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScript"></a>

```csharp
private void ResetSqlScript()
```

##### `ResetSqlScriptFile` <a name="ResetSqlScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScriptFile"></a>

```csharp
private void ResetSqlScriptFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpec">InfrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference">GoogleDataplexTaskSparkInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpecInput">InfrastructureSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFileInput">PythonScriptFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFileInput">SqlScriptFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptInput">SqlScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClass">MainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFile">PythonScriptFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScript">SqlScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFile">SqlScriptFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InfrastructureSpec`<sup>Required</sup> <a name="InfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpec"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpecOutputReference InfrastructureSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference">GoogleDataplexTaskSparkInfrastructureSpecOutputReference</a>

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `InfrastructureSpecInput`<sup>Optional</sup> <a name="InfrastructureSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpecInput"></a>

```csharp
public GoogleDataplexTaskSparkInfrastructureSpec InfrastructureSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClassInput"></a>

```csharp
public string MainClassInput { get; }
```

- *Type:* string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUriInput"></a>

```csharp
public string MainJarFileUriInput { get; }
```

- *Type:* string

---

##### `PythonScriptFileInput`<sup>Optional</sup> <a name="PythonScriptFileInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFileInput"></a>

```csharp
public string PythonScriptFileInput { get; }
```

- *Type:* string

---

##### `SqlScriptFileInput`<sup>Optional</sup> <a name="SqlScriptFileInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFileInput"></a>

```csharp
public string SqlScriptFileInput { get; }
```

- *Type:* string

---

##### `SqlScriptInput`<sup>Optional</sup> <a name="SqlScriptInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptInput"></a>

```csharp
public string SqlScriptInput { get; }
```

- *Type:* string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClass"></a>

```csharp
public string MainClass { get; }
```

- *Type:* string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; }
```

- *Type:* string

---

##### `PythonScriptFile`<sup>Required</sup> <a name="PythonScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFile"></a>

```csharp
public string PythonScriptFile { get; }
```

- *Type:* string

---

##### `SqlScript`<sup>Required</sup> <a name="SqlScript" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScript"></a>

```csharp
public string SqlScript { get; }
```

- *Type:* string

---

##### `SqlScriptFile`<sup>Required</sup> <a name="SqlScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFile"></a>

```csharp
public string SqlScriptFile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskSpark InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---


### GoogleDataplexTaskTimeoutsOutputReference <a name="GoogleDataplexTaskTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDataplexTaskTriggerSpecOutputReference <a name="GoogleDataplexTaskTriggerSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexTaskTriggerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexTaskTriggerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---



