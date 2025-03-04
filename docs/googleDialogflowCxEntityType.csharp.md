# `googleDialogflowCxEntityType` Submodule <a name="`googleDialogflowCxEntityType` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxEntityType <a name="GoogleDialogflowCxEntityType" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type google_dialogflow_cx_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityType(Construct Scope, string Id, GoogleDialogflowCxEntityTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig">GoogleDialogflowCxEntityTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig">GoogleDialogflowCxEntityTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities">PutEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases">PutExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetAutoExpansionMode">ResetAutoExpansionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetEnableFuzzyExtraction">ResetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetExcludedPhrases">ResetExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetRedact">ResetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntities` <a name="PutEntities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities"></a>

```csharp
private void PutEntities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putEntities.parameter.value"></a>

- *Type:* object

---

##### `PutExcludedPhrases` <a name="PutExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases"></a>

```csharp
private void PutExcludedPhrases(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putExcludedPhrases.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDialogflowCxEntityTypeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

---

##### `ResetAutoExpansionMode` <a name="ResetAutoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetAutoExpansionMode"></a>

```csharp
private void ResetAutoExpansionMode()
```

##### `ResetEnableFuzzyExtraction` <a name="ResetEnableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetEnableFuzzyExtraction"></a>

```csharp
private void ResetEnableFuzzyExtraction()
```

##### `ResetExcludedPhrases` <a name="ResetExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetExcludedPhrases"></a>

```csharp
private void ResetExcludedPhrases()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetRedact` <a name="ResetRedact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetRedact"></a>

```csharp
private void ResetRedact()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxEntityType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxEntityType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxEntityType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxEntityType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxEntityType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDialogflowCxEntityType resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxEntityType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxEntityType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxEntityType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entities">Entities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList">GoogleDialogflowCxEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrases">ExcludedPhrases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList">GoogleDialogflowCxEntityTypeExcludedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference">GoogleDialogflowCxEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionModeInput">AutoExpansionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtractionInput">EnableFuzzyExtractionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entitiesInput">EntitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrasesInput">ExcludedPhrasesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redactInput">RedactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionMode">AutoExpansionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtraction">EnableFuzzyExtraction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redact">Redact</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entities"></a>

```csharp
public GoogleDialogflowCxEntityTypeEntitiesList Entities { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList">GoogleDialogflowCxEntityTypeEntitiesList</a>

---

##### `ExcludedPhrases`<sup>Required</sup> <a name="ExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrases"></a>

```csharp
public GoogleDialogflowCxEntityTypeExcludedPhrasesList ExcludedPhrases { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList">GoogleDialogflowCxEntityTypeExcludedPhrasesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeouts"></a>

```csharp
public GoogleDialogflowCxEntityTypeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference">GoogleDialogflowCxEntityTypeTimeoutsOutputReference</a>

---

##### `AutoExpansionModeInput`<sup>Optional</sup> <a name="AutoExpansionModeInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionModeInput"></a>

```csharp
public string AutoExpansionModeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableFuzzyExtractionInput`<sup>Optional</sup> <a name="EnableFuzzyExtractionInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtractionInput"></a>

```csharp
public object EnableFuzzyExtractionInput { get; }
```

- *Type:* object

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.entitiesInput"></a>

```csharp
public object EntitiesInput { get; }
```

- *Type:* object

---

##### `ExcludedPhrasesInput`<sup>Optional</sup> <a name="ExcludedPhrasesInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.excludedPhrasesInput"></a>

```csharp
public object ExcludedPhrasesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `RedactInput`<sup>Optional</sup> <a name="RedactInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redactInput"></a>

```csharp
public object RedactInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoExpansionMode`<sup>Required</sup> <a name="AutoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.autoExpansionMode"></a>

```csharp
public string AutoExpansionMode { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableFuzzyExtraction`<sup>Required</sup> <a name="EnableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.enableFuzzyExtraction"></a>

```csharp
public object EnableFuzzyExtraction { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Redact`<sup>Required</sup> <a name="Redact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.redact"></a>

```csharp
public object Redact { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxEntityTypeConfig <a name="GoogleDialogflowCxEntityTypeConfig" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object Entities,
    string Kind,
    string AutoExpansionMode = null,
    object EnableFuzzyExtraction = null,
    object ExcludedPhrases = null,
    string Id = null,
    string LanguageCode = null,
    string Parent = null,
    object Redact = null,
    GoogleDialogflowCxEntityTypeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.entities">Entities</a></code> | <code>object</code> | entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.kind">Kind</a></code> | <code>string</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.autoExpansionMode">AutoExpansionMode</a></code> | <code>string</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.enableFuzzyExtraction">EnableFuzzyExtraction</a></code> | <code>object</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.excludedPhrases">ExcludedPhrases</a></code> | <code>object</code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.redact">Redact</a></code> | <code>object</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#display_name GoogleDialogflowCxEntityType#display_name}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.entities"></a>

```csharp
public object Entities { get; set; }
```

- *Type:* object

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#entities GoogleDialogflowCxEntityType#entities}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Indicates whether the entity type can be automatically expanded.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#kind GoogleDialogflowCxEntityType#kind}

---

##### `AutoExpansionMode`<sup>Optional</sup> <a name="AutoExpansionMode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.autoExpansionMode"></a>

```csharp
public string AutoExpansionMode { get; set; }
```

- *Type:* string

Represents kinds of entities.

* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#auto_expansion_mode GoogleDialogflowCxEntityType#auto_expansion_mode}

---

##### `EnableFuzzyExtraction`<sup>Optional</sup> <a name="EnableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.enableFuzzyExtraction"></a>

```csharp
public object EnableFuzzyExtraction { get; set; }
```

- *Type:* object

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#enable_fuzzy_extraction GoogleDialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `ExcludedPhrases`<sup>Optional</sup> <a name="ExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.excludedPhrases"></a>

```csharp
public object ExcludedPhrases { get; set; }
```

- *Type:* object

excluded_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#excluded_phrases GoogleDialogflowCxEntityType#excluded_phrases}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#id GoogleDialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#language_code GoogleDialogflowCxEntityType#language_code}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#parent GoogleDialogflowCxEntityType#parent}

---

##### `Redact`<sup>Optional</sup> <a name="Redact" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.redact"></a>

```csharp
public object Redact { get; set; }
```

- *Type:* object

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#redact GoogleDialogflowCxEntityType#redact}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeConfig.property.timeouts"></a>

```csharp
public GoogleDialogflowCxEntityTypeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts">GoogleDialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#timeouts GoogleDialogflowCxEntityType#timeouts}

---

### GoogleDialogflowCxEntityTypeEntities <a name="GoogleDialogflowCxEntityTypeEntities" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeEntities {
    string[] Synonyms = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.synonyms">Synonyms</a></code> | <code>string[]</code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.value">Value</a></code> | <code>string</code> | The primary value associated with this entity entry. |

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#synonyms GoogleDialogflowCxEntityType#synonyms}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntities.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}

---

### GoogleDialogflowCxEntityTypeExcludedPhrases <a name="GoogleDialogflowCxEntityTypeExcludedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeExcludedPhrases {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.property.value">Value</a></code> | <code>string</code> | The word or phrase to be excluded. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrases.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The word or phrase to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}

---

### GoogleDialogflowCxEntityTypeTimeouts <a name="GoogleDialogflowCxEntityTypeTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxEntityTypeEntitiesList <a name="GoogleDialogflowCxEntityTypeEntitiesList" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get"></a>

```csharp
private GoogleDialogflowCxEntityTypeEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxEntityTypeEntitiesOutputReference <a name="GoogleDialogflowCxEntityTypeEntitiesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeEntitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxEntityTypeExcludedPhrasesList <a name="GoogleDialogflowCxEntityTypeExcludedPhrasesList" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeExcludedPhrasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get"></a>

```csharp
private GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference <a name="GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxEntityTypeTimeoutsOutputReference <a name="GoogleDialogflowCxEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxEntityTypeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxEntityType.GoogleDialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



