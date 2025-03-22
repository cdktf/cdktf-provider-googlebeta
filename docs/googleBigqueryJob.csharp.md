# `googleBigqueryJob` Submodule <a name="`googleBigqueryJob` Submodule" id="@cdktf/provider-google-beta.googleBigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryJob <a name="GoogleBigqueryJob" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJob(Construct Scope, string Id, GoogleBigqueryJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig">GoogleBigqueryJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig">GoogleBigqueryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy">PutCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract">PutExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad">PutLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetCopy">ResetCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetExtract">ResetExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetJobTimeoutMs">ResetJobTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLoad">ResetLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCopy` <a name="PutCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy"></a>

```csharp
private void PutCopy(GoogleBigqueryJobCopy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---

##### `PutExtract` <a name="PutExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract"></a>

```csharp
private void PutExtract(GoogleBigqueryJobExtract Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putExtract.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---

##### `PutLoad` <a name="PutLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad"></a>

```csharp
private void PutLoad(GoogleBigqueryJobLoad Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putLoad.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery"></a>

```csharp
private void PutQuery(GoogleBigqueryJobQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

---

##### `ResetCopy` <a name="ResetCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetCopy"></a>

```csharp
private void ResetCopy()
```

##### `ResetExtract` <a name="ResetExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetExtract"></a>

```csharp
private void ResetExtract()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobTimeoutMs` <a name="ResetJobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetJobTimeoutMs"></a>

```csharp
private void ResetJobTimeoutMs()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLoad` <a name="ResetLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLoad"></a>

```csharp
private void ResetLoad()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copy">Copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference">GoogleBigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extract">Extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference">GoogleBigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobType">JobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.load">Load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference">GoogleBigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.query">Query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference">GoogleBigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList">GoogleBigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference">GoogleBigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copyInput">CopyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extractInput">ExtractInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMsInput">JobTimeoutMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.loadInput">LoadInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMs">JobTimeoutMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Copy`<sup>Required</sup> <a name="Copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copy"></a>

```csharp
public GoogleBigqueryJobCopyOutputReference Copy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference">GoogleBigqueryJobCopyOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extract"></a>

```csharp
public GoogleBigqueryJobExtractOutputReference Extract { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference">GoogleBigqueryJobExtractOutputReference</a>

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobType"></a>

```csharp
public string JobType { get; }
```

- *Type:* string

---

##### `Load`<sup>Required</sup> <a name="Load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.load"></a>

```csharp
public GoogleBigqueryJobLoadOutputReference Load { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference">GoogleBigqueryJobLoadOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.query"></a>

```csharp
public GoogleBigqueryJobQueryOutputReference Query { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference">GoogleBigqueryJobQueryOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.status"></a>

```csharp
public GoogleBigqueryJobStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList">GoogleBigqueryJobStatusList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeouts"></a>

```csharp
public GoogleBigqueryJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference">GoogleBigqueryJobTimeoutsOutputReference</a>

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `CopyInput`<sup>Optional</sup> <a name="CopyInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.copyInput"></a>

```csharp
public GoogleBigqueryJobCopy CopyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---

##### `ExtractInput`<sup>Optional</sup> <a name="ExtractInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.extractInput"></a>

```csharp
public GoogleBigqueryJobExtract ExtractInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `JobTimeoutMsInput`<sup>Optional</sup> <a name="JobTimeoutMsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMsInput"></a>

```csharp
public string JobTimeoutMsInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadInput`<sup>Optional</sup> <a name="LoadInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.loadInput"></a>

```csharp
public GoogleBigqueryJobLoad LoadInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.queryInput"></a>

```csharp
public GoogleBigqueryJobQuery QueryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `JobTimeoutMs`<sup>Required</sup> <a name="JobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.jobTimeoutMs"></a>

```csharp
public string JobTimeoutMs { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryJobConfig <a name="GoogleBigqueryJobConfig" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JobId,
    GoogleBigqueryJobCopy Copy = null,
    GoogleBigqueryJobExtract Extract = null,
    string Id = null,
    string JobTimeoutMs = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleBigqueryJobLoad Load = null,
    string Location = null,
    string Project = null,
    GoogleBigqueryJobQuery Query = null,
    GoogleBigqueryJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobId">JobId</a></code> | <code>string</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.copy">Copy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.extract">Extract</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobTimeoutMs">JobTimeoutMs</a></code> | <code>string</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.load">Load</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.location">Location</a></code> | <code>string</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.query">Query</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#job_id GoogleBigqueryJob#job_id}

---

##### `Copy`<sup>Optional</sup> <a name="Copy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.copy"></a>

```csharp
public GoogleBigqueryJobCopy Copy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#copy GoogleBigqueryJob#copy}

---

##### `Extract`<sup>Optional</sup> <a name="Extract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.extract"></a>

```csharp
public GoogleBigqueryJobExtract Extract { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#extract GoogleBigqueryJob#extract}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobTimeoutMs`<sup>Optional</sup> <a name="JobTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.jobTimeoutMs"></a>

```csharp
public string JobTimeoutMs { get; set; }
```

- *Type:* string

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#job_timeout_ms GoogleBigqueryJob#job_timeout_ms}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#labels GoogleBigqueryJob#labels}

---

##### `Load`<sup>Optional</sup> <a name="Load" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.load"></a>

```csharp
public GoogleBigqueryJobLoad Load { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#load GoogleBigqueryJob#load}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#location GoogleBigqueryJob#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.query"></a>

```csharp
public GoogleBigqueryJobQuery Query { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts">GoogleBigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#timeouts GoogleBigqueryJob#timeouts}

---

### GoogleBigqueryJobCopy <a name="GoogleBigqueryJobCopy" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopy {
    object SourceTables,
    string CreateDisposition = null,
    GoogleBigqueryJobCopyDestinationEncryptionConfiguration DestinationEncryptionConfiguration = null,
    GoogleBigqueryJobCopyDestinationTable DestinationTable = null,
    string WriteDisposition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.sourceTables">SourceTables</a></code> | <code>object</code> | source_tables block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.createDisposition">CreateDisposition</a></code> | <code>string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.writeDisposition">WriteDisposition</a></code> | <code>string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `SourceTables`<sup>Required</sup> <a name="SourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.sourceTables"></a>

```csharp
public object SourceTables { get; set; }
```

- *Type:* object

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#source_tables GoogleBigqueryJob#source_tables}

---

##### `CreateDisposition`<sup>Optional</sup> <a name="CreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.createDisposition"></a>

```csharp
public string CreateDisposition { get; set; }
```

- *Type:* string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `DestinationEncryptionConfiguration`<sup>Optional</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```csharp
public GoogleBigqueryJobCopyDestinationEncryptionConfiguration DestinationEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.destinationTable"></a>

```csharp
public GoogleBigqueryJobCopyDestinationTable DestinationTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `WriteDisposition`<sup>Optional</sup> <a name="WriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy.property.writeDisposition"></a>

```csharp
public string WriteDisposition { get; set; }
```

- *Type:* string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobCopyDestinationEncryptionConfiguration <a name="GoogleBigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopyDestinationEncryptionConfiguration {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobCopyDestinationTable <a name="GoogleBigqueryJobCopyDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopyDestinationTable {
    string TableId,
    string DatasetId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.tableId">TableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobCopySourceTables <a name="GoogleBigqueryJobCopySourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopySourceTables {
    string TableId,
    string DatasetId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.tableId">TableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTables.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobExtract <a name="GoogleBigqueryJobExtract" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobExtract {
    string[] DestinationUris,
    string Compression = null,
    string DestinationFormat = null,
    string FieldDelimiter = null,
    object PrintHeader = null,
    GoogleBigqueryJobExtractSourceModel SourceModel = null,
    GoogleBigqueryJobExtractSourceTable SourceTable = null,
    object UseAvroLogicalTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationUris">DestinationUris</a></code> | <code>string[]</code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.compression">Compression</a></code> | <code>string</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationFormat">DestinationFormat</a></code> | <code>string</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.printHeader">PrintHeader</a></code> | <code>object</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceModel">SourceModel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceTable">SourceTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>object</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `DestinationUris`<sup>Required</sup> <a name="DestinationUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationUris"></a>

```csharp
public string[] DestinationUris { get; set; }
```

- *Type:* string[]

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_uris GoogleBigqueryJob#destination_uris}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#compression GoogleBigqueryJob#compression}

---

##### `DestinationFormat`<sup>Optional</sup> <a name="DestinationFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.destinationFormat"></a>

```csharp
public string DestinationFormat { get; set; }
```

- *Type:* string

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_format GoogleBigqueryJob#destination_format}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

##### `PrintHeader`<sup>Optional</sup> <a name="PrintHeader" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.printHeader"></a>

```csharp
public object PrintHeader { get; set; }
```

- *Type:* object

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#print_header GoogleBigqueryJob#print_header}

---

##### `SourceModel`<sup>Optional</sup> <a name="SourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceModel"></a>

```csharp
public GoogleBigqueryJobExtractSourceModel SourceModel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#source_model GoogleBigqueryJob#source_model}

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.sourceTable"></a>

```csharp
public GoogleBigqueryJobExtractSourceTable SourceTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#source_table GoogleBigqueryJob#source_table}

---

##### `UseAvroLogicalTypes`<sup>Optional</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract.property.useAvroLogicalTypes"></a>

```csharp
public object UseAvroLogicalTypes { get; set; }
```

- *Type:* object

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#use_avro_logical_types GoogleBigqueryJob#use_avro_logical_types}

---

### GoogleBigqueryJobExtractSourceModel <a name="GoogleBigqueryJobExtractSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobExtractSourceModel {
    string DatasetId,
    string ModelId,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.modelId">ModelId</a></code> | <code>string</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this model. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#model_id GoogleBigqueryJob#model_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobExtractSourceTable <a name="GoogleBigqueryJobExtractSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobExtractSourceTable {
    string TableId,
    string DatasetId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.tableId">TableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobLoad <a name="GoogleBigqueryJobLoad" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoad {
    GoogleBigqueryJobLoadDestinationTable DestinationTable,
    string[] SourceUris,
    object AllowJaggedRows = null,
    object AllowQuotedNewlines = null,
    object Autodetect = null,
    string CreateDisposition = null,
    GoogleBigqueryJobLoadDestinationEncryptionConfiguration DestinationEncryptionConfiguration = null,
    string Encoding = null,
    string FieldDelimiter = null,
    object IgnoreUnknownValues = null,
    string JsonExtension = null,
    double MaxBadRecords = null,
    string NullMarker = null,
    GoogleBigqueryJobLoadParquetOptions ParquetOptions = null,
    string[] ProjectionFields = null,
    string Quote = null,
    string[] SchemaUpdateOptions = null,
    double SkipLeadingRows = null,
    string SourceFormat = null,
    GoogleBigqueryJobLoadTimePartitioning TimePartitioning = null,
    string WriteDisposition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>object</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>object</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.autodetect">Autodetect</a></code> | <code>object</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.createDisposition">CreateDisposition</a></code> | <code>string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.encoding">Encoding</a></code> | <code>string</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>object</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.nullMarker">NullMarker</a></code> | <code>string</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.projectionFields">ProjectionFields</a></code> | <code>string[]</code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.quote">Quote</a></code> | <code>string</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>string[]</code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.writeDisposition">WriteDisposition</a></code> | <code>string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationTable"></a>

```csharp
public GoogleBigqueryJobLoadDestinationTable DestinationTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; set; }
```

- *Type:* string[]

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#source_uris GoogleBigqueryJob#source_uris}

---

##### `AllowJaggedRows`<sup>Optional</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowJaggedRows"></a>

```csharp
public object AllowJaggedRows { get; set; }
```

- *Type:* object

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#allow_jagged_rows GoogleBigqueryJob#allow_jagged_rows}

---

##### `AllowQuotedNewlines`<sup>Optional</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.allowQuotedNewlines"></a>

```csharp
public object AllowQuotedNewlines { get; set; }
```

- *Type:* object

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#allow_quoted_newlines GoogleBigqueryJob#allow_quoted_newlines}

---

##### `Autodetect`<sup>Optional</sup> <a name="Autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.autodetect"></a>

```csharp
public object Autodetect { get; set; }
```

- *Type:* object

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#autodetect GoogleBigqueryJob#autodetect}

---

##### `CreateDisposition`<sup>Optional</sup> <a name="CreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.createDisposition"></a>

```csharp
public string CreateDisposition { get; set; }
```

- *Type:* string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `DestinationEncryptionConfiguration`<sup>Optional</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```csharp
public GoogleBigqueryJobLoadDestinationEncryptionConfiguration DestinationEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#encoding GoogleBigqueryJob#encoding}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}

---

##### `IgnoreUnknownValues`<sup>Optional</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.ignoreUnknownValues"></a>

```csharp
public object IgnoreUnknownValues { get; set; }
```

- *Type:* object

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#ignore_unknown_values GoogleBigqueryJob#ignore_unknown_values}

---

##### `JsonExtension`<sup>Optional</sup> <a name="JsonExtension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; set; }
```

- *Type:* string

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#json_extension GoogleBigqueryJob#json_extension}

---

##### `MaxBadRecords`<sup>Optional</sup> <a name="MaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; set; }
```

- *Type:* double

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#max_bad_records GoogleBigqueryJob#max_bad_records}

---

##### `NullMarker`<sup>Optional</sup> <a name="NullMarker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.nullMarker"></a>

```csharp
public string NullMarker { get; set; }
```

- *Type:* string

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#null_marker GoogleBigqueryJob#null_marker}

---

##### `ParquetOptions`<sup>Optional</sup> <a name="ParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.parquetOptions"></a>

```csharp
public GoogleBigqueryJobLoadParquetOptions ParquetOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#parquet_options GoogleBigqueryJob#parquet_options}

---

##### `ProjectionFields`<sup>Optional</sup> <a name="ProjectionFields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.projectionFields"></a>

```csharp
public string[] ProjectionFields { get; set; }
```

- *Type:* string[]

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#projection_fields GoogleBigqueryJob#projection_fields}

---

##### `Quote`<sup>Optional</sup> <a name="Quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.quote"></a>

```csharp
public string Quote { get; set; }
```

- *Type:* string

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#quote GoogleBigqueryJob#quote}

---

##### `SchemaUpdateOptions`<sup>Optional</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.schemaUpdateOptions"></a>

```csharp
public string[] SchemaUpdateOptions { get; set; }
```

- *Type:* string[]

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; set; }
```

- *Type:* double

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#skip_leading_rows GoogleBigqueryJob#skip_leading_rows}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; set; }
```

- *Type:* string

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#source_format GoogleBigqueryJob#source_format}

---

##### `TimePartitioning`<sup>Optional</sup> <a name="TimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.timePartitioning"></a>

```csharp
public GoogleBigqueryJobLoadTimePartitioning TimePartitioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#time_partitioning GoogleBigqueryJob#time_partitioning}

---

##### `WriteDisposition`<sup>Optional</sup> <a name="WriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad.property.writeDisposition"></a>

```csharp
public string WriteDisposition { get; set; }
```

- *Type:* string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobLoadDestinationEncryptionConfiguration <a name="GoogleBigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadDestinationEncryptionConfiguration {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobLoadDestinationTable <a name="GoogleBigqueryJobLoadDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadDestinationTable {
    string TableId,
    string DatasetId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.tableId">TableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobLoadParquetOptions <a name="GoogleBigqueryJobLoadParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadParquetOptions {
    object EnableListInference = null,
    object EnumAsString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enableListInference">EnableListInference</a></code> | <code>object</code> | If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enumAsString">EnumAsString</a></code> | <code>object</code> | If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `EnableListInference`<sup>Optional</sup> <a name="EnableListInference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enableListInference"></a>

```csharp
public object EnableListInference { get; set; }
```

- *Type:* object

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#enable_list_inference GoogleBigqueryJob#enable_list_inference}

---

##### `EnumAsString`<sup>Optional</sup> <a name="EnumAsString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions.property.enumAsString"></a>

```csharp
public object EnumAsString { get; set; }
```

- *Type:* object

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#enum_as_string GoogleBigqueryJob#enum_as_string}

---

### GoogleBigqueryJobLoadTimePartitioning <a name="GoogleBigqueryJobLoadTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadTimePartitioning {
    string Type,
    string ExpirationMs = null,
    string Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.type">Type</a></code> | <code>string</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.expirationMs">ExpirationMs</a></code> | <code>string</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.field">Field</a></code> | <code>string</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#type GoogleBigqueryJob#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```csharp
public string ExpirationMs { get; set; }
```

- *Type:* string

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#expiration_ms GoogleBigqueryJob#expiration_ms}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#field GoogleBigqueryJob#field}

---

### GoogleBigqueryJobQuery <a name="GoogleBigqueryJobQuery" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQuery {
    string Query,
    object AllowLargeResults = null,
    object Continuous = null,
    string CreateDisposition = null,
    GoogleBigqueryJobQueryDefaultDataset DefaultDataset = null,
    GoogleBigqueryJobQueryDestinationEncryptionConfiguration DestinationEncryptionConfiguration = null,
    GoogleBigqueryJobQueryDestinationTable DestinationTable = null,
    object FlattenResults = null,
    double MaximumBillingTier = null,
    string MaximumBytesBilled = null,
    string ParameterMode = null,
    string Priority = null,
    string[] SchemaUpdateOptions = null,
    GoogleBigqueryJobQueryScriptOptions ScriptOptions = null,
    object UseLegacySql = null,
    object UseQueryCache = null,
    object UserDefinedFunctionResources = null,
    string WriteDisposition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.query">Query</a></code> | <code>string</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.allowLargeResults">AllowLargeResults</a></code> | <code>object</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.continuous">Continuous</a></code> | <code>object</code> | Whether to run the query as continuous or a regular query. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.createDisposition">CreateDisposition</a></code> | <code>string</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.defaultDataset">DefaultDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.flattenResults">FlattenResults</a></code> | <code>object</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBillingTier">MaximumBillingTier</a></code> | <code>double</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBytesBilled">MaximumBytesBilled</a></code> | <code>string</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.parameterMode">ParameterMode</a></code> | <code>string</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.priority">Priority</a></code> | <code>string</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>string[]</code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.scriptOptions">ScriptOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useLegacySql">UseLegacySql</a></code> | <code>object</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useQueryCache">UseQueryCache</a></code> | <code>object</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.userDefinedFunctionResources">UserDefinedFunctionResources</a></code> | <code>object</code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.writeDisposition">WriteDisposition</a></code> | <code>string</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}

---

##### `AllowLargeResults`<sup>Optional</sup> <a name="AllowLargeResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.allowLargeResults"></a>

```csharp
public object AllowLargeResults { get; set; }
```

- *Type:* object

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#allow_large_results GoogleBigqueryJob#allow_large_results}

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.continuous"></a>

```csharp
public object Continuous { get; set; }
```

- *Type:* object

Whether to run the query as continuous or a regular query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#continuous GoogleBigqueryJob#continuous}

---

##### `CreateDisposition`<sup>Optional</sup> <a name="CreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.createDisposition"></a>

```csharp
public string CreateDisposition { get; set; }
```

- *Type:* string

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}

---

##### `DefaultDataset`<sup>Optional</sup> <a name="DefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.defaultDataset"></a>

```csharp
public GoogleBigqueryJobQueryDefaultDataset DefaultDataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#default_dataset GoogleBigqueryJob#default_dataset}

---

##### `DestinationEncryptionConfiguration`<sup>Optional</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```csharp
public GoogleBigqueryJobQueryDestinationEncryptionConfiguration DestinationEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.destinationTable"></a>

```csharp
public GoogleBigqueryJobQueryDestinationTable DestinationTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}

---

##### `FlattenResults`<sup>Optional</sup> <a name="FlattenResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.flattenResults"></a>

```csharp
public object FlattenResults { get; set; }
```

- *Type:* object

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#flatten_results GoogleBigqueryJob#flatten_results}

---

##### `MaximumBillingTier`<sup>Optional</sup> <a name="MaximumBillingTier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBillingTier"></a>

```csharp
public double MaximumBillingTier { get; set; }
```

- *Type:* double

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#maximum_billing_tier GoogleBigqueryJob#maximum_billing_tier}

---

##### `MaximumBytesBilled`<sup>Optional</sup> <a name="MaximumBytesBilled" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.maximumBytesBilled"></a>

```csharp
public string MaximumBytesBilled { get; set; }
```

- *Type:* string

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#maximum_bytes_billed GoogleBigqueryJob#maximum_bytes_billed}

---

##### `ParameterMode`<sup>Optional</sup> <a name="ParameterMode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.parameterMode"></a>

```csharp
public string ParameterMode { get; set; }
```

- *Type:* string

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#parameter_mode GoogleBigqueryJob#parameter_mode}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#priority GoogleBigqueryJob#priority}

---

##### `SchemaUpdateOptions`<sup>Optional</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.schemaUpdateOptions"></a>

```csharp
public string[] SchemaUpdateOptions { get; set; }
```

- *Type:* string[]

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}

---

##### `ScriptOptions`<sup>Optional</sup> <a name="ScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.scriptOptions"></a>

```csharp
public GoogleBigqueryJobQueryScriptOptions ScriptOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#script_options GoogleBigqueryJob#script_options}

---

##### `UseLegacySql`<sup>Optional</sup> <a name="UseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useLegacySql"></a>

```csharp
public object UseLegacySql { get; set; }
```

- *Type:* object

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#use_legacy_sql GoogleBigqueryJob#use_legacy_sql}

---

##### `UseQueryCache`<sup>Optional</sup> <a name="UseQueryCache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.useQueryCache"></a>

```csharp
public object UseQueryCache { get; set; }
```

- *Type:* object

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#use_query_cache GoogleBigqueryJob#use_query_cache}

---

##### `UserDefinedFunctionResources`<sup>Optional</sup> <a name="UserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.userDefinedFunctionResources"></a>

```csharp
public object UserDefinedFunctionResources { get; set; }
```

- *Type:* object

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#user_defined_function_resources GoogleBigqueryJob#user_defined_function_resources}

---

##### `WriteDisposition`<sup>Optional</sup> <a name="WriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery.property.writeDisposition"></a>

```csharp
public string WriteDisposition { get; set; }
```

- *Type:* string

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}

---

### GoogleBigqueryJobQueryDefaultDataset <a name="GoogleBigqueryJobQueryDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryDefaultDataset {
    string DatasetId,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.datasetId">DatasetId</a></code> | <code>string</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobQueryDestinationEncryptionConfiguration <a name="GoogleBigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryDestinationEncryptionConfiguration {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}

---

### GoogleBigqueryJobQueryDestinationTable <a name="GoogleBigqueryJobQueryDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryDestinationTable {
    string TableId,
    string DatasetId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.tableId">TableId</a></code> | <code>string</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}

---

### GoogleBigqueryJobQueryScriptOptions <a name="GoogleBigqueryJobQueryScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryScriptOptions {
    string KeyResultStatement = null,
    string StatementByteBudget = null,
    string StatementTimeoutMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.keyResultStatement">KeyResultStatement</a></code> | <code>string</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementByteBudget">StatementByteBudget</a></code> | <code>string</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementTimeoutMs">StatementTimeoutMs</a></code> | <code>string</code> | Timeout period for each statement in a script. |

---

##### `KeyResultStatement`<sup>Optional</sup> <a name="KeyResultStatement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```csharp
public string KeyResultStatement { get; set; }
```

- *Type:* string

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#key_result_statement GoogleBigqueryJob#key_result_statement}

---

##### `StatementByteBudget`<sup>Optional</sup> <a name="StatementByteBudget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```csharp
public string StatementByteBudget { get; set; }
```

- *Type:* string

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#statement_byte_budget GoogleBigqueryJob#statement_byte_budget}

---

##### `StatementTimeoutMs`<sup>Optional</sup> <a name="StatementTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```csharp
public string StatementTimeoutMs { get; set; }
```

- *Type:* string

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#statement_timeout_ms GoogleBigqueryJob#statement_timeout_ms}

---

### GoogleBigqueryJobQueryUserDefinedFunctionResources <a name="GoogleBigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryUserDefinedFunctionResources {
    string InlineCode = null,
    string ResourceUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">InlineCode</a></code> | <code>string</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">ResourceUri</a></code> | <code>string</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `InlineCode`<sup>Optional</sup> <a name="InlineCode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```csharp
public string InlineCode { get; set; }
```

- *Type:* string

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#inline_code GoogleBigqueryJob#inline_code}

---

##### `ResourceUri`<sup>Optional</sup> <a name="ResourceUri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```csharp
public string ResourceUri { get; set; }
```

- *Type:* string

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#resource_uri GoogleBigqueryJob#resource_uri}

---

### GoogleBigqueryJobStatus <a name="GoogleBigqueryJobStatus" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatus {

};
```


### GoogleBigqueryJobStatusErrorResult <a name="GoogleBigqueryJobStatusErrorResult" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusErrorResult {

};
```


### GoogleBigqueryJobStatusErrors <a name="GoogleBigqueryJobStatusErrors" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusErrors {

};
```


### GoogleBigqueryJobTimeouts <a name="GoogleBigqueryJobTimeouts" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobCopyDestinationEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobCopyDestinationTableOutputReference <a name="GoogleBigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopyDestinationTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobCopyDestinationTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---


### GoogleBigqueryJobCopyOutputReference <a name="GoogleBigqueryJobCopyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">PutDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables">PutSourceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetCreateDisposition">ResetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">ResetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetWriteDisposition">ResetWriteDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationEncryptionConfiguration` <a name="PutDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```csharp
private void PutDestinationEncryptionConfiguration(GoogleBigqueryJobCopyDestinationEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable"></a>

```csharp
private void PutDestinationTable(GoogleBigqueryJobCopyDestinationTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---

##### `PutSourceTables` <a name="PutSourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables"></a>

```csharp
private void PutSourceTables(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* object

---

##### `ResetCreateDisposition` <a name="ResetCreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```csharp
private void ResetCreateDisposition()
```

##### `ResetDestinationEncryptionConfiguration` <a name="ResetDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```csharp
private void ResetDestinationEncryptionConfiguration()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetDestinationTable"></a>

```csharp
private void ResetDestinationTable()
```

##### `ResetWriteDisposition` <a name="ResetWriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```csharp
private void ResetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference">GoogleBigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTables">SourceTables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList">GoogleBigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDispositionInput">CreateDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">DestinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTablesInput">SourceTablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDispositionInput">WriteDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDisposition">CreateDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDisposition">WriteDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationEncryptionConfiguration`<sup>Required</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```csharp
public GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference DestinationEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTable"></a>

```csharp
public GoogleBigqueryJobCopyDestinationTableOutputReference DestinationTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTableOutputReference">GoogleBigqueryJobCopyDestinationTableOutputReference</a>

---

##### `SourceTables`<sup>Required</sup> <a name="SourceTables" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTables"></a>

```csharp
public GoogleBigqueryJobCopySourceTablesList SourceTables { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList">GoogleBigqueryJobCopySourceTablesList</a>

---

##### `CreateDispositionInput`<sup>Optional</sup> <a name="CreateDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```csharp
public string CreateDispositionInput { get; }
```

- *Type:* string

---

##### `DestinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="DestinationEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```csharp
public GoogleBigqueryJobCopyDestinationEncryptionConfiguration DestinationEncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationEncryptionConfiguration">GoogleBigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```csharp
public GoogleBigqueryJobCopyDestinationTable DestinationTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyDestinationTable">GoogleBigqueryJobCopyDestinationTable</a>

---

##### `SourceTablesInput`<sup>Optional</sup> <a name="SourceTablesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```csharp
public object SourceTablesInput { get; }
```

- *Type:* object

---

##### `WriteDispositionInput`<sup>Optional</sup> <a name="WriteDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```csharp
public string WriteDispositionInput { get; }
```

- *Type:* string

---

##### `CreateDisposition`<sup>Required</sup> <a name="CreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.createDisposition"></a>

```csharp
public string CreateDisposition { get; }
```

- *Type:* string

---

##### `WriteDisposition`<sup>Required</sup> <a name="WriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.writeDisposition"></a>

```csharp
public string WriteDisposition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopyOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobCopy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopy">GoogleBigqueryJobCopy</a>

---


### GoogleBigqueryJobCopySourceTablesList <a name="GoogleBigqueryJobCopySourceTablesList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopySourceTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get"></a>

```csharp
private GoogleBigqueryJobCopySourceTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryJobCopySourceTablesOutputReference <a name="GoogleBigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobCopySourceTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryJobExtractOutputReference <a name="GoogleBigqueryJobExtractOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobExtractOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel">PutSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable">PutSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetDestinationFormat">ResetDestinationFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetPrintHeader">ResetPrintHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceModel">ResetSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">ResetUseAvroLogicalTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceModel` <a name="PutSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel"></a>

```csharp
private void PutSourceModel(GoogleBigqueryJobExtractSourceModel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---

##### `PutSourceTable` <a name="PutSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable"></a>

```csharp
private void PutSourceTable(GoogleBigqueryJobExtractSourceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.putSourceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDestinationFormat` <a name="ResetDestinationFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```csharp
private void ResetDestinationFormat()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetPrintHeader` <a name="ResetPrintHeader" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetPrintHeader"></a>

```csharp
private void ResetPrintHeader()
```

##### `ResetSourceModel` <a name="ResetSourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceModel"></a>

```csharp
private void ResetSourceModel()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetSourceTable"></a>

```csharp
private void ResetSourceTable()
```

##### `ResetUseAvroLogicalTypes` <a name="ResetUseAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```csharp
private void ResetUseAvroLogicalTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModel">SourceModel</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference">GoogleBigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTable">SourceTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference">GoogleBigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormatInput">DestinationFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUrisInput">DestinationUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeaderInput">PrintHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModelInput">SourceModelInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">UseAvroLogicalTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormat">DestinationFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUris">DestinationUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeader">PrintHeader</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceModel`<sup>Required</sup> <a name="SourceModel" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModel"></a>

```csharp
public GoogleBigqueryJobExtractSourceModelOutputReference SourceModel { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference">GoogleBigqueryJobExtractSourceModelOutputReference</a>

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTable"></a>

```csharp
public GoogleBigqueryJobExtractSourceTableOutputReference SourceTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference">GoogleBigqueryJobExtractSourceTableOutputReference</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DestinationFormatInput`<sup>Optional</sup> <a name="DestinationFormatInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```csharp
public string DestinationFormatInput { get; }
```

- *Type:* string

---

##### `DestinationUrisInput`<sup>Optional</sup> <a name="DestinationUrisInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```csharp
public string[] DestinationUrisInput { get; }
```

- *Type:* string[]

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `PrintHeaderInput`<sup>Optional</sup> <a name="PrintHeaderInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```csharp
public object PrintHeaderInput { get; }
```

- *Type:* object

---

##### `SourceModelInput`<sup>Optional</sup> <a name="SourceModelInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```csharp
public GoogleBigqueryJobExtractSourceModel SourceModelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```csharp
public GoogleBigqueryJobExtractSourceTable SourceTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---

##### `UseAvroLogicalTypesInput`<sup>Optional</sup> <a name="UseAvroLogicalTypesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```csharp
public object UseAvroLogicalTypesInput { get; }
```

- *Type:* object

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DestinationFormat`<sup>Required</sup> <a name="DestinationFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationFormat"></a>

```csharp
public string DestinationFormat { get; }
```

- *Type:* string

---

##### `DestinationUris`<sup>Required</sup> <a name="DestinationUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.destinationUris"></a>

```csharp
public string[] DestinationUris { get; }
```

- *Type:* string[]

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `PrintHeader`<sup>Required</sup> <a name="PrintHeader" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.printHeader"></a>

```csharp
public object PrintHeader { get; }
```

- *Type:* object

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```csharp
public object UseAvroLogicalTypes { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobExtract InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtract">GoogleBigqueryJobExtract</a>

---


### GoogleBigqueryJobExtractSourceModelOutputReference <a name="GoogleBigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobExtractSourceModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobExtractSourceModel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceModel">GoogleBigqueryJobExtractSourceModel</a>

---


### GoogleBigqueryJobExtractSourceTableOutputReference <a name="GoogleBigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobExtractSourceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobExtractSourceTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobExtractSourceTable">GoogleBigqueryJobExtractSourceTable</a>

---


### GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobLoadDestinationEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobLoadDestinationTableOutputReference <a name="GoogleBigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadDestinationTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobLoadDestinationTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---


### GoogleBigqueryJobLoadOutputReference <a name="GoogleBigqueryJobLoadOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">PutDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions">PutParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning">PutTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowJaggedRows">ResetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowQuotedNewlines">ResetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAutodetect">ResetAutodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetCreateDisposition">ResetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">ResetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetIgnoreUnknownValues">ResetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetJsonExtension">ResetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetMaxBadRecords">ResetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetNullMarker">ResetNullMarker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetParquetOptions">ResetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetProjectionFields">ResetProjectionFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetQuote">ResetQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSchemaUpdateOptions">ResetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetTimePartitioning">ResetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetWriteDisposition">ResetWriteDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationEncryptionConfiguration` <a name="PutDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```csharp
private void PutDestinationEncryptionConfiguration(GoogleBigqueryJobLoadDestinationEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable"></a>

```csharp
private void PutDestinationTable(GoogleBigqueryJobLoadDestinationTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---

##### `PutParquetOptions` <a name="PutParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions"></a>

```csharp
private void PutParquetOptions(GoogleBigqueryJobLoadParquetOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---

##### `PutTimePartitioning` <a name="PutTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning"></a>

```csharp
private void PutTimePartitioning(GoogleBigqueryJobLoadTimePartitioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---

##### `ResetAllowJaggedRows` <a name="ResetAllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```csharp
private void ResetAllowJaggedRows()
```

##### `ResetAllowQuotedNewlines` <a name="ResetAllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```csharp
private void ResetAllowQuotedNewlines()
```

##### `ResetAutodetect` <a name="ResetAutodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetAutodetect"></a>

```csharp
private void ResetAutodetect()
```

##### `ResetCreateDisposition` <a name="ResetCreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```csharp
private void ResetCreateDisposition()
```

##### `ResetDestinationEncryptionConfiguration` <a name="ResetDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```csharp
private void ResetDestinationEncryptionConfiguration()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetIgnoreUnknownValues` <a name="ResetIgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```csharp
private void ResetIgnoreUnknownValues()
```

##### `ResetJsonExtension` <a name="ResetJsonExtension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetJsonExtension"></a>

```csharp
private void ResetJsonExtension()
```

##### `ResetMaxBadRecords` <a name="ResetMaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```csharp
private void ResetMaxBadRecords()
```

##### `ResetNullMarker` <a name="ResetNullMarker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetNullMarker"></a>

```csharp
private void ResetNullMarker()
```

##### `ResetParquetOptions` <a name="ResetParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetParquetOptions"></a>

```csharp
private void ResetParquetOptions()
```

##### `ResetProjectionFields` <a name="ResetProjectionFields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetProjectionFields"></a>

```csharp
private void ResetProjectionFields()
```

##### `ResetQuote` <a name="ResetQuote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetQuote"></a>

```csharp
private void ResetQuote()
```

##### `ResetSchemaUpdateOptions` <a name="ResetSchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```csharp
private void ResetSchemaUpdateOptions()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```csharp
private void ResetSkipLeadingRows()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetSourceFormat"></a>

```csharp
private void ResetSourceFormat()
```

##### `ResetTimePartitioning` <a name="ResetTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```csharp
private void ResetTimePartitioning()
```

##### `ResetWriteDisposition` <a name="ResetWriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```csharp
private void ResetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference">GoogleBigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference">GoogleBigqueryJobLoadParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference">GoogleBigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRowsInput">AllowJaggedRowsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">AllowQuotedNewlinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetectInput">AutodetectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDispositionInput">CreateDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">DestinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">IgnoreUnknownValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtensionInput">JsonExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecordsInput">MaxBadRecordsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarkerInput">NullMarkerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptionsInput">ParquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFieldsInput">ProjectionFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quoteInput">QuoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">SchemaUpdateOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUrisInput">SourceUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioningInput">TimePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDispositionInput">WriteDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetect">Autodetect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDisposition">CreateDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarker">NullMarker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFields">ProjectionFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quote">Quote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDisposition">WriteDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationEncryptionConfiguration`<sup>Required</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```csharp
public GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference DestinationEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTable"></a>

```csharp
public GoogleBigqueryJobLoadDestinationTableOutputReference DestinationTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTableOutputReference">GoogleBigqueryJobLoadDestinationTableOutputReference</a>

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptions"></a>

```csharp
public GoogleBigqueryJobLoadParquetOptionsOutputReference ParquetOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference">GoogleBigqueryJobLoadParquetOptionsOutputReference</a>

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioning"></a>

```csharp
public GoogleBigqueryJobLoadTimePartitioningOutputReference TimePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference">GoogleBigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `AllowJaggedRowsInput`<sup>Optional</sup> <a name="AllowJaggedRowsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```csharp
public object AllowJaggedRowsInput { get; }
```

- *Type:* object

---

##### `AllowQuotedNewlinesInput`<sup>Optional</sup> <a name="AllowQuotedNewlinesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```csharp
public object AllowQuotedNewlinesInput { get; }
```

- *Type:* object

---

##### `AutodetectInput`<sup>Optional</sup> <a name="AutodetectInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetectInput"></a>

```csharp
public object AutodetectInput { get; }
```

- *Type:* object

---

##### `CreateDispositionInput`<sup>Optional</sup> <a name="CreateDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```csharp
public string CreateDispositionInput { get; }
```

- *Type:* string

---

##### `DestinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="DestinationEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```csharp
public GoogleBigqueryJobLoadDestinationEncryptionConfiguration DestinationEncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationEncryptionConfiguration">GoogleBigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```csharp
public GoogleBigqueryJobLoadDestinationTable DestinationTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadDestinationTable">GoogleBigqueryJobLoadDestinationTable</a>

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `IgnoreUnknownValuesInput`<sup>Optional</sup> <a name="IgnoreUnknownValuesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```csharp
public object IgnoreUnknownValuesInput { get; }
```

- *Type:* object

---

##### `JsonExtensionInput`<sup>Optional</sup> <a name="JsonExtensionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```csharp
public string JsonExtensionInput { get; }
```

- *Type:* string

---

##### `MaxBadRecordsInput`<sup>Optional</sup> <a name="MaxBadRecordsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```csharp
public double MaxBadRecordsInput { get; }
```

- *Type:* double

---

##### `NullMarkerInput`<sup>Optional</sup> <a name="NullMarkerInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```csharp
public string NullMarkerInput { get; }
```

- *Type:* string

---

##### `ParquetOptionsInput`<sup>Optional</sup> <a name="ParquetOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.parquetOptionsInput"></a>

```csharp
public GoogleBigqueryJobLoadParquetOptions ParquetOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---

##### `ProjectionFieldsInput`<sup>Optional</sup> <a name="ProjectionFieldsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```csharp
public string[] ProjectionFieldsInput { get; }
```

- *Type:* string[]

---

##### `QuoteInput`<sup>Optional</sup> <a name="QuoteInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quoteInput"></a>

```csharp
public string QuoteInput { get; }
```

- *Type:* string

---

##### `SchemaUpdateOptionsInput`<sup>Optional</sup> <a name="SchemaUpdateOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```csharp
public string[] SchemaUpdateOptionsInput { get; }
```

- *Type:* string[]

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```csharp
public double SkipLeadingRowsInput { get; }
```

- *Type:* double

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```csharp
public string SourceFormatInput { get; }
```

- *Type:* string

---

##### `SourceUrisInput`<sup>Optional</sup> <a name="SourceUrisInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```csharp
public string[] SourceUrisInput { get; }
```

- *Type:* string[]

---

##### `TimePartitioningInput`<sup>Optional</sup> <a name="TimePartitioningInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```csharp
public GoogleBigqueryJobLoadTimePartitioning TimePartitioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---

##### `WriteDispositionInput`<sup>Optional</sup> <a name="WriteDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```csharp
public string WriteDispositionInput { get; }
```

- *Type:* string

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```csharp
public object AllowJaggedRows { get; }
```

- *Type:* object

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```csharp
public object AllowQuotedNewlines { get; }
```

- *Type:* object

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.autodetect"></a>

```csharp
public object Autodetect { get; }
```

- *Type:* object

---

##### `CreateDisposition`<sup>Required</sup> <a name="CreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.createDisposition"></a>

```csharp
public string CreateDisposition { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```csharp
public object IgnoreUnknownValues { get; }
```

- *Type:* object

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; }
```

- *Type:* string

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; }
```

- *Type:* double

---

##### `NullMarker`<sup>Required</sup> <a name="NullMarker" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.nullMarker"></a>

```csharp
public string NullMarker { get; }
```

- *Type:* string

---

##### `ProjectionFields`<sup>Required</sup> <a name="ProjectionFields" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.projectionFields"></a>

```csharp
public string[] ProjectionFields { get; }
```

- *Type:* string[]

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.quote"></a>

```csharp
public string Quote { get; }
```

- *Type:* string

---

##### `SchemaUpdateOptions`<sup>Required</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```csharp
public string[] SchemaUpdateOptions { get; }
```

- *Type:* string[]

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; }
```

- *Type:* string[]

---

##### `WriteDisposition`<sup>Required</sup> <a name="WriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.writeDisposition"></a>

```csharp
public string WriteDisposition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobLoad InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoad">GoogleBigqueryJobLoad</a>

---


### GoogleBigqueryJobLoadParquetOptionsOutputReference <a name="GoogleBigqueryJobLoadParquetOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadParquetOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference">ResetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString">ResetEnumAsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableListInference` <a name="ResetEnableListInference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference"></a>

```csharp
private void ResetEnableListInference()
```

##### `ResetEnumAsString` <a name="ResetEnumAsString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString"></a>

```csharp
private void ResetEnumAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput">EnableListInferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput">EnumAsStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInference">EnableListInference</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsString">EnumAsString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableListInferenceInput`<sup>Optional</sup> <a name="EnableListInferenceInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```csharp
public object EnableListInferenceInput { get; }
```

- *Type:* object

---

##### `EnumAsStringInput`<sup>Optional</sup> <a name="EnumAsStringInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput"></a>

```csharp
public object EnumAsStringInput { get; }
```

- *Type:* object

---

##### `EnableListInference`<sup>Required</sup> <a name="EnableListInference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enableListInference"></a>

```csharp
public object EnableListInference { get; }
```

- *Type:* object

---

##### `EnumAsString`<sup>Required</sup> <a name="EnumAsString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.enumAsString"></a>

```csharp
public object EnumAsString { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobLoadParquetOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadParquetOptions">GoogleBigqueryJobLoadParquetOptions</a>

---


### GoogleBigqueryJobLoadTimePartitioningOutputReference <a name="GoogleBigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobLoadTimePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```csharp
private void ResetExpirationMs()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```csharp
public string ExpirationMsInput { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```csharp
public string ExpirationMs { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobLoadTimePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobLoadTimePartitioning">GoogleBigqueryJobLoadTimePartitioning</a>

---


### GoogleBigqueryJobQueryDefaultDatasetOutputReference <a name="GoogleBigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryDefaultDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobQueryDefaultDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---


### GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobQueryDestinationEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### GoogleBigqueryJobQueryDestinationTableOutputReference <a name="GoogleBigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryDestinationTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```csharp
private void ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobQueryDestinationTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---


### GoogleBigqueryJobQueryOutputReference <a name="GoogleBigqueryJobQueryOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset">PutDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">PutDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions">PutScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources">PutUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetAllowLargeResults">ResetAllowLargeResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetCreateDisposition">ResetCreateDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDefaultDataset">ResetDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">ResetDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetFlattenResults">ResetFlattenResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBillingTier">ResetMaximumBillingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBytesBilled">ResetMaximumBytesBilled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetParameterMode">ResetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetSchemaUpdateOptions">ResetSchemaUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetScriptOptions">ResetScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseLegacySql">ResetUseLegacySql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseQueryCache">ResetUseQueryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">ResetUserDefinedFunctionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetWriteDisposition">ResetWriteDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultDataset` <a name="PutDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset"></a>

```csharp
private void PutDefaultDataset(GoogleBigqueryJobQueryDefaultDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDefaultDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---

##### `PutDestinationEncryptionConfiguration` <a name="PutDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```csharp
private void PutDestinationEncryptionConfiguration(GoogleBigqueryJobQueryDestinationEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable"></a>

```csharp
private void PutDestinationTable(GoogleBigqueryJobQueryDestinationTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---

##### `PutScriptOptions` <a name="PutScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions"></a>

```csharp
private void PutScriptOptions(GoogleBigqueryJobQueryScriptOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putScriptOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---

##### `PutUserDefinedFunctionResources` <a name="PutUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```csharp
private void PutUserDefinedFunctionResources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowLargeResults` <a name="ResetAllowLargeResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```csharp
private void ResetAllowLargeResults()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetCreateDisposition` <a name="ResetCreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```csharp
private void ResetCreateDisposition()
```

##### `ResetDefaultDataset` <a name="ResetDefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```csharp
private void ResetDefaultDataset()
```

##### `ResetDestinationEncryptionConfiguration` <a name="ResetDestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```csharp
private void ResetDestinationEncryptionConfiguration()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetDestinationTable"></a>

```csharp
private void ResetDestinationTable()
```

##### `ResetFlattenResults` <a name="ResetFlattenResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetFlattenResults"></a>

```csharp
private void ResetFlattenResults()
```

##### `ResetMaximumBillingTier` <a name="ResetMaximumBillingTier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```csharp
private void ResetMaximumBillingTier()
```

##### `ResetMaximumBytesBilled` <a name="ResetMaximumBytesBilled" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```csharp
private void ResetMaximumBytesBilled()
```

##### `ResetParameterMode` <a name="ResetParameterMode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetParameterMode"></a>

```csharp
private void ResetParameterMode()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetSchemaUpdateOptions` <a name="ResetSchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```csharp
private void ResetSchemaUpdateOptions()
```

##### `ResetScriptOptions` <a name="ResetScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetScriptOptions"></a>

```csharp
private void ResetScriptOptions()
```

##### `ResetUseLegacySql` <a name="ResetUseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```csharp
private void ResetUseLegacySql()
```

##### `ResetUseQueryCache` <a name="ResetUseQueryCache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```csharp
private void ResetUseQueryCache()
```

##### `ResetUserDefinedFunctionResources` <a name="ResetUserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```csharp
private void ResetUserDefinedFunctionResources()
```

##### `ResetWriteDisposition` <a name="ResetWriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```csharp
private void ResetWriteDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDataset">DefaultDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference">GoogleBigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">DestinationEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference">GoogleBigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptions">ScriptOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference">GoogleBigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResources">UserDefinedFunctionResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList">GoogleBigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResultsInput">AllowLargeResultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDispositionInput">CreateDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDatasetInput">DefaultDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">DestinationEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResultsInput">FlattenResultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTierInput">MaximumBillingTierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilledInput">MaximumBytesBilledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterModeInput">ParameterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">SchemaUpdateOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptionsInput">ScriptOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySqlInput">UseLegacySqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCacheInput">UseQueryCacheInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">UserDefinedFunctionResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDispositionInput">WriteDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResults">AllowLargeResults</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.continuous">Continuous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDisposition">CreateDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResults">FlattenResults</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTier">MaximumBillingTier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilled">MaximumBytesBilled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterMode">ParameterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptions">SchemaUpdateOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCache">UseQueryCache</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDisposition">WriteDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultDataset`<sup>Required</sup> <a name="DefaultDataset" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDataset"></a>

```csharp
public GoogleBigqueryJobQueryDefaultDatasetOutputReference DefaultDataset { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDatasetOutputReference">GoogleBigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `DestinationEncryptionConfiguration`<sup>Required</sup> <a name="DestinationEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```csharp
public GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference DestinationEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference">GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTable"></a>

```csharp
public GoogleBigqueryJobQueryDestinationTableOutputReference DestinationTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTableOutputReference">GoogleBigqueryJobQueryDestinationTableOutputReference</a>

---

##### `ScriptOptions`<sup>Required</sup> <a name="ScriptOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptions"></a>

```csharp
public GoogleBigqueryJobQueryScriptOptionsOutputReference ScriptOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference">GoogleBigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `UserDefinedFunctionResources`<sup>Required</sup> <a name="UserDefinedFunctionResources" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```csharp
public GoogleBigqueryJobQueryUserDefinedFunctionResourcesList UserDefinedFunctionResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList">GoogleBigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `AllowLargeResultsInput`<sup>Optional</sup> <a name="AllowLargeResultsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```csharp
public object AllowLargeResultsInput { get; }
```

- *Type:* object

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.continuousInput"></a>

```csharp
public object ContinuousInput { get; }
```

- *Type:* object

---

##### `CreateDispositionInput`<sup>Optional</sup> <a name="CreateDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```csharp
public string CreateDispositionInput { get; }
```

- *Type:* string

---

##### `DefaultDatasetInput`<sup>Optional</sup> <a name="DefaultDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```csharp
public GoogleBigqueryJobQueryDefaultDataset DefaultDatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDefaultDataset">GoogleBigqueryJobQueryDefaultDataset</a>

---

##### `DestinationEncryptionConfigurationInput`<sup>Optional</sup> <a name="DestinationEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```csharp
public GoogleBigqueryJobQueryDestinationEncryptionConfiguration DestinationEncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationEncryptionConfiguration">GoogleBigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```csharp
public GoogleBigqueryJobQueryDestinationTable DestinationTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryDestinationTable">GoogleBigqueryJobQueryDestinationTable</a>

---

##### `FlattenResultsInput`<sup>Optional</sup> <a name="FlattenResultsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```csharp
public object FlattenResultsInput { get; }
```

- *Type:* object

---

##### `MaximumBillingTierInput`<sup>Optional</sup> <a name="MaximumBillingTierInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```csharp
public double MaximumBillingTierInput { get; }
```

- *Type:* double

---

##### `MaximumBytesBilledInput`<sup>Optional</sup> <a name="MaximumBytesBilledInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```csharp
public string MaximumBytesBilledInput { get; }
```

- *Type:* string

---

##### `ParameterModeInput`<sup>Optional</sup> <a name="ParameterModeInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```csharp
public string ParameterModeInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `SchemaUpdateOptionsInput`<sup>Optional</sup> <a name="SchemaUpdateOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```csharp
public string[] SchemaUpdateOptionsInput { get; }
```

- *Type:* string[]

---

##### `ScriptOptionsInput`<sup>Optional</sup> <a name="ScriptOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```csharp
public GoogleBigqueryJobQueryScriptOptions ScriptOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---

##### `UseLegacySqlInput`<sup>Optional</sup> <a name="UseLegacySqlInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```csharp
public object UseLegacySqlInput { get; }
```

- *Type:* object

---

##### `UseQueryCacheInput`<sup>Optional</sup> <a name="UseQueryCacheInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```csharp
public object UseQueryCacheInput { get; }
```

- *Type:* object

---

##### `UserDefinedFunctionResourcesInput`<sup>Optional</sup> <a name="UserDefinedFunctionResourcesInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```csharp
public object UserDefinedFunctionResourcesInput { get; }
```

- *Type:* object

---

##### `WriteDispositionInput`<sup>Optional</sup> <a name="WriteDispositionInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```csharp
public string WriteDispositionInput { get; }
```

- *Type:* string

---

##### `AllowLargeResults`<sup>Required</sup> <a name="AllowLargeResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```csharp
public object AllowLargeResults { get; }
```

- *Type:* object

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.continuous"></a>

```csharp
public object Continuous { get; }
```

- *Type:* object

---

##### `CreateDisposition`<sup>Required</sup> <a name="CreateDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.createDisposition"></a>

```csharp
public string CreateDisposition { get; }
```

- *Type:* string

---

##### `FlattenResults`<sup>Required</sup> <a name="FlattenResults" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.flattenResults"></a>

```csharp
public object FlattenResults { get; }
```

- *Type:* object

---

##### `MaximumBillingTier`<sup>Required</sup> <a name="MaximumBillingTier" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```csharp
public double MaximumBillingTier { get; }
```

- *Type:* double

---

##### `MaximumBytesBilled`<sup>Required</sup> <a name="MaximumBytesBilled" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```csharp
public string MaximumBytesBilled { get; }
```

- *Type:* string

---

##### `ParameterMode`<sup>Required</sup> <a name="ParameterMode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.parameterMode"></a>

```csharp
public string ParameterMode { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `SchemaUpdateOptions`<sup>Required</sup> <a name="SchemaUpdateOptions" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```csharp
public string[] SchemaUpdateOptions { get; }
```

- *Type:* string[]

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useLegacySql"></a>

```csharp
public object UseLegacySql { get; }
```

- *Type:* object

---

##### `UseQueryCache`<sup>Required</sup> <a name="UseQueryCache" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.useQueryCache"></a>

```csharp
public object UseQueryCache { get; }
```

- *Type:* object

---

##### `WriteDisposition`<sup>Required</sup> <a name="WriteDisposition" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.writeDisposition"></a>

```csharp
public string WriteDisposition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQuery">GoogleBigqueryJobQuery</a>

---


### GoogleBigqueryJobQueryScriptOptionsOutputReference <a name="GoogleBigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryScriptOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">ResetKeyResultStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">ResetStatementByteBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">ResetStatementTimeoutMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyResultStatement` <a name="ResetKeyResultStatement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```csharp
private void ResetKeyResultStatement()
```

##### `ResetStatementByteBudget` <a name="ResetStatementByteBudget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```csharp
private void ResetStatementByteBudget()
```

##### `ResetStatementTimeoutMs` <a name="ResetStatementTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```csharp
private void ResetStatementTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">KeyResultStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">StatementByteBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">StatementTimeoutMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">KeyResultStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">StatementByteBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">StatementTimeoutMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyResultStatementInput`<sup>Optional</sup> <a name="KeyResultStatementInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```csharp
public string KeyResultStatementInput { get; }
```

- *Type:* string

---

##### `StatementByteBudgetInput`<sup>Optional</sup> <a name="StatementByteBudgetInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```csharp
public string StatementByteBudgetInput { get; }
```

- *Type:* string

---

##### `StatementTimeoutMsInput`<sup>Optional</sup> <a name="StatementTimeoutMsInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```csharp
public string StatementTimeoutMsInput { get; }
```

- *Type:* string

---

##### `KeyResultStatement`<sup>Required</sup> <a name="KeyResultStatement" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```csharp
public string KeyResultStatement { get; }
```

- *Type:* string

---

##### `StatementByteBudget`<sup>Required</sup> <a name="StatementByteBudget" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```csharp
public string StatementByteBudget { get; }
```

- *Type:* string

---

##### `StatementTimeoutMs`<sup>Required</sup> <a name="StatementTimeoutMs" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```csharp
public string StatementTimeoutMs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobQueryScriptOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryScriptOptions">GoogleBigqueryJobQueryScriptOptions</a>

---


### GoogleBigqueryJobQueryUserDefinedFunctionResourcesList <a name="GoogleBigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryUserDefinedFunctionResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```csharp
private GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">ResetInlineCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">ResetResourceUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInlineCode` <a name="ResetInlineCode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```csharp
private void ResetInlineCode()
```

##### `ResetResourceUri` <a name="ResetResourceUri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```csharp
private void ResetResourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">InlineCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">ResourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">InlineCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">ResourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InlineCodeInput`<sup>Optional</sup> <a name="InlineCodeInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```csharp
public string InlineCodeInput { get; }
```

- *Type:* string

---

##### `ResourceUriInput`<sup>Optional</sup> <a name="ResourceUriInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```csharp
public string ResourceUriInput { get; }
```

- *Type:* string

---

##### `InlineCode`<sup>Required</sup> <a name="InlineCode" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```csharp
public string InlineCode { get; }
```

- *Type:* string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```csharp
public string ResourceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryJobStatusErrorResultList <a name="GoogleBigqueryJobStatusErrorResultList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusErrorResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get"></a>

```csharp
private GoogleBigqueryJobStatusErrorResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBigqueryJobStatusErrorResultOutputReference <a name="GoogleBigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusErrorResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult">GoogleBigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobStatusErrorResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResult">GoogleBigqueryJobStatusErrorResult</a>

---


### GoogleBigqueryJobStatusErrorsList <a name="GoogleBigqueryJobStatusErrorsList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get"></a>

```csharp
private GoogleBigqueryJobStatusErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBigqueryJobStatusErrorsOutputReference <a name="GoogleBigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors">GoogleBigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobStatusErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrors">GoogleBigqueryJobStatusErrors</a>

---


### GoogleBigqueryJobStatusList <a name="GoogleBigqueryJobStatusList" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get"></a>

```csharp
private GoogleBigqueryJobStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBigqueryJobStatusOutputReference <a name="GoogleBigqueryJobStatusOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errorResult">ErrorResult</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList">GoogleBigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList">GoogleBigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus">GoogleBigqueryJobStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorResult`<sup>Required</sup> <a name="ErrorResult" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errorResult"></a>

```csharp
public GoogleBigqueryJobStatusErrorResultList ErrorResult { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorResultList">GoogleBigqueryJobStatusErrorResultList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.errors"></a>

```csharp
public GoogleBigqueryJobStatusErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusErrorsList">GoogleBigqueryJobStatusErrorsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryJobStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobStatus">GoogleBigqueryJobStatus</a>

---


### GoogleBigqueryJobTimeoutsOutputReference <a name="GoogleBigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryJob.GoogleBigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



