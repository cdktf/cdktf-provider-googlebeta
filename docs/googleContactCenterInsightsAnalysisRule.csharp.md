# `googleContactCenterInsightsAnalysisRule` Submodule <a name="`googleContactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAnalysisRule <a name="GoogleContactCenterInsightsAnalysisRule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRule(Construct Scope, string Id, GoogleContactCenterInsightsAnalysisRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig">GoogleContactCenterInsightsAnalysisRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig">GoogleContactCenterInsightsAnalysisRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector">PutAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage">ResetAnalysisPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector">ResetAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter">ResetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnnotatorSelector` <a name="PutAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```csharp
private void PutAnnotatorSelector(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContactCenterInsightsAnalysisRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAnalysisPercentage` <a name="ResetAnalysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```csharp
private void ResetAnalysisPercentage()
```

##### `ResetAnnotatorSelector` <a name="ResetAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```csharp
private void ResetAnnotatorSelector()
```

##### `ResetConversationFilter` <a name="ResetConversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```csharp
private void ResetConversationFilter()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContactCenterInsightsAnalysisRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContactCenterInsightsAnalysisRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContactCenterInsightsAnalysisRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContactCenterInsightsAnalysisRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsAnalysisRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector">AnnotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput">AnalysisPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">AnnotatorSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput">ConversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage">AnalysisPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter">ConversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnnotatorSelector`<sup>Required</sup> <a name="AnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference AnnotatorSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `AnalysisPercentageInput`<sup>Optional</sup> <a name="AnalysisPercentageInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```csharp
public double AnalysisPercentageInput { get; }
```

- *Type:* double

---

##### `AnnotatorSelectorInput`<sup>Optional</sup> <a name="AnnotatorSelectorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector AnnotatorSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `ConversationFilterInput`<sup>Optional</sup> <a name="ConversationFilterInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```csharp
public string ConversationFilterInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `AnalysisPercentage`<sup>Required</sup> <a name="AnalysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```csharp
public double AnalysisPercentage { get; }
```

- *Type:* double

---

##### `ConversationFilter`<sup>Required</sup> <a name="ConversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```csharp
public string ConversationFilter { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector {
    string[] IssueModels = null,
    string[] PhraseMatchers = null,
    GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig QaConfig = null,
    object RunEntityAnnotator = null,
    object RunIntentAnnotator = null,
    object RunInterruptionAnnotator = null,
    object RunIssueModelAnnotator = null,
    object RunPhraseMatcherAnnotator = null,
    object RunQaAnnotator = null,
    object RunSentimentAnnotator = null,
    object RunSilenceAnnotator = null,
    object RunSummarizationAnnotator = null,
    GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig SummarizationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">IssueModels</a></code> | <code>string[]</code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">PhraseMatchers</a></code> | <code>string[]</code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">QaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">RunEntityAnnotator</a></code> | <code>object</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">RunIntentAnnotator</a></code> | <code>object</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">RunInterruptionAnnotator</a></code> | <code>object</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">RunIssueModelAnnotator</a></code> | <code>object</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">RunPhraseMatcherAnnotator</a></code> | <code>object</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">RunQaAnnotator</a></code> | <code>object</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">RunSentimentAnnotator</a></code> | <code>object</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">RunSilenceAnnotator</a></code> | <code>object</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">RunSummarizationAnnotator</a></code> | <code>object</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">SummarizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `IssueModels`<sup>Optional</sup> <a name="IssueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```csharp
public string[] IssueModels { get; set; }
```

- *Type:* string[]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#issue_models GoogleContactCenterInsightsAnalysisRule#issue_models}

---

##### `PhraseMatchers`<sup>Optional</sup> <a name="PhraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```csharp
public string[] PhraseMatchers { get; set; }
```

- *Type:* string[]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#phrase_matchers GoogleContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `QaConfig`<sup>Optional</sup> <a name="QaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig QaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#qa_config GoogleContactCenterInsightsAnalysisRule#qa_config}

---

##### `RunEntityAnnotator`<sup>Optional</sup> <a name="RunEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```csharp
public object RunEntityAnnotator { get; set; }
```

- *Type:* object

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_entity_annotator GoogleContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `RunIntentAnnotator`<sup>Optional</sup> <a name="RunIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```csharp
public object RunIntentAnnotator { get; set; }
```

- *Type:* object

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_intent_annotator GoogleContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `RunInterruptionAnnotator`<sup>Optional</sup> <a name="RunInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```csharp
public object RunInterruptionAnnotator { get; set; }
```

- *Type:* object

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_interruption_annotator GoogleContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `RunIssueModelAnnotator`<sup>Optional</sup> <a name="RunIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```csharp
public object RunIssueModelAnnotator { get; set; }
```

- *Type:* object

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_issue_model_annotator GoogleContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `RunPhraseMatcherAnnotator`<sup>Optional</sup> <a name="RunPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```csharp
public object RunPhraseMatcherAnnotator { get; set; }
```

- *Type:* object

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_phrase_matcher_annotator GoogleContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `RunQaAnnotator`<sup>Optional</sup> <a name="RunQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```csharp
public object RunQaAnnotator { get; set; }
```

- *Type:* object

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_qa_annotator GoogleContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `RunSentimentAnnotator`<sup>Optional</sup> <a name="RunSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```csharp
public object RunSentimentAnnotator { get; set; }
```

- *Type:* object

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_sentiment_annotator GoogleContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `RunSilenceAnnotator`<sup>Optional</sup> <a name="RunSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```csharp
public object RunSilenceAnnotator { get; set; }
```

- *Type:* object

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_silence_annotator GoogleContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `RunSummarizationAnnotator`<sup>Optional</sup> <a name="RunSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```csharp
public object RunSummarizationAnnotator { get; set; }
```

- *Type:* object

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#run_summarization_annotator GoogleContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `SummarizationConfig`<sup>Optional</sup> <a name="SummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig SummarizationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#summarization_config GoogleContactCenterInsightsAnalysisRule#summarization_config}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig {
    GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct ScorecardList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">ScorecardList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `ScorecardList`<sup>Optional</sup> <a name="ScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct ScorecardList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#scorecard_list GoogleContactCenterInsightsAnalysisRule#scorecard_list}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct {
    string[] QaScorecardRevisions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">QaScorecardRevisions</a></code> | <code>string[]</code> | List of QaScorecardRevisions. |

---

##### `QaScorecardRevisions`<sup>Optional</sup> <a name="QaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```csharp
public string[] QaScorecardRevisions { get; set; }
```

- *Type:* string[]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#qa_scorecard_revisions GoogleContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig {
    string ConversationProfile = null,
    string SummarizationModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">ConversationProfile</a></code> | <code>string</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">SummarizationModel</a></code> | <code>string</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `ConversationProfile`<sup>Optional</sup> <a name="ConversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```csharp
public string ConversationProfile { get; set; }
```

- *Type:* string

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#conversation_profile GoogleContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `SummarizationModel`<sup>Optional</sup> <a name="SummarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```csharp
public string SummarizationModel { get; set; }
```

- *Type:* string

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#summarization_model GoogleContactCenterInsightsAnalysisRule#summarization_model}

---

### GoogleContactCenterInsightsAnalysisRuleConfig <a name="GoogleContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    object Active = null,
    double AnalysisPercentage = null,
    GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector AnnotatorSelector = null,
    string ConversationFilter = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleContactCenterInsightsAnalysisRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location">Location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active">Active</a></code> | <code>object</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">AnalysisPercentage</a></code> | <code>double</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">AnnotatorSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">ConversationFilter</a></code> | <code>string</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#location GoogleContactCenterInsightsAnalysisRule#location}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#active GoogleContactCenterInsightsAnalysisRule#active}

---

##### `AnalysisPercentage`<sup>Optional</sup> <a name="AnalysisPercentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```csharp
public double AnalysisPercentage { get; set; }
```

- *Type:* double

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#analysis_percentage GoogleContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `AnnotatorSelector`<sup>Optional</sup> <a name="AnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector AnnotatorSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#annotator_selector GoogleContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `ConversationFilter`<sup>Optional</sup> <a name="ConversationFilter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```csharp
public string ConversationFilter { get; set; }
```

- *Type:* string

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#conversation_filter GoogleContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#display_name GoogleContactCenterInsightsAnalysisRule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#timeouts GoogleContactCenterInsightsAnalysisRule#timeouts}

---

### GoogleContactCenterInsightsAnalysisRuleTimeouts <a name="GoogleContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">PutQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">PutSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">ResetIssueModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">ResetPhraseMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">ResetQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">ResetRunEntityAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">ResetRunIntentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">ResetRunInterruptionAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">ResetRunIssueModelAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">ResetRunPhraseMatcherAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">ResetRunQaAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">ResetRunSentimentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">ResetRunSilenceAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">ResetRunSummarizationAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">ResetSummarizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQaConfig` <a name="PutQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```csharp
private void PutQaConfig(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `PutSummarizationConfig` <a name="PutSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```csharp
private void PutSummarizationConfig(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `ResetIssueModels` <a name="ResetIssueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```csharp
private void ResetIssueModels()
```

##### `ResetPhraseMatchers` <a name="ResetPhraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```csharp
private void ResetPhraseMatchers()
```

##### `ResetQaConfig` <a name="ResetQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```csharp
private void ResetQaConfig()
```

##### `ResetRunEntityAnnotator` <a name="ResetRunEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```csharp
private void ResetRunEntityAnnotator()
```

##### `ResetRunIntentAnnotator` <a name="ResetRunIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```csharp
private void ResetRunIntentAnnotator()
```

##### `ResetRunInterruptionAnnotator` <a name="ResetRunInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```csharp
private void ResetRunInterruptionAnnotator()
```

##### `ResetRunIssueModelAnnotator` <a name="ResetRunIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```csharp
private void ResetRunIssueModelAnnotator()
```

##### `ResetRunPhraseMatcherAnnotator` <a name="ResetRunPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```csharp
private void ResetRunPhraseMatcherAnnotator()
```

##### `ResetRunQaAnnotator` <a name="ResetRunQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```csharp
private void ResetRunQaAnnotator()
```

##### `ResetRunSentimentAnnotator` <a name="ResetRunSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```csharp
private void ResetRunSentimentAnnotator()
```

##### `ResetRunSilenceAnnotator` <a name="ResetRunSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```csharp
private void ResetRunSilenceAnnotator()
```

##### `ResetRunSummarizationAnnotator` <a name="ResetRunSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```csharp
private void ResetRunSummarizationAnnotator()
```

##### `ResetSummarizationConfig` <a name="ResetSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```csharp
private void ResetSummarizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">QaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">SummarizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">IssueModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">PhraseMatchersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">QaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">RunEntityAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">RunIntentAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">RunInterruptionAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">RunIssueModelAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">RunPhraseMatcherAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">RunQaAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">RunSentimentAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">RunSilenceAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">RunSummarizationAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">SummarizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">IssueModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">PhraseMatchers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">RunEntityAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">RunIntentAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">RunInterruptionAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">RunIssueModelAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">RunPhraseMatcherAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">RunQaAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">RunSentimentAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">RunSilenceAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">RunSummarizationAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QaConfig`<sup>Required</sup> <a name="QaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference QaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `SummarizationConfig`<sup>Required</sup> <a name="SummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference SummarizationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `IssueModelsInput`<sup>Optional</sup> <a name="IssueModelsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```csharp
public string[] IssueModelsInput { get; }
```

- *Type:* string[]

---

##### `PhraseMatchersInput`<sup>Optional</sup> <a name="PhraseMatchersInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```csharp
public string[] PhraseMatchersInput { get; }
```

- *Type:* string[]

---

##### `QaConfigInput`<sup>Optional</sup> <a name="QaConfigInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig QaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `RunEntityAnnotatorInput`<sup>Optional</sup> <a name="RunEntityAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```csharp
public object RunEntityAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunIntentAnnotatorInput`<sup>Optional</sup> <a name="RunIntentAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```csharp
public object RunIntentAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunInterruptionAnnotatorInput`<sup>Optional</sup> <a name="RunInterruptionAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```csharp
public object RunInterruptionAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunIssueModelAnnotatorInput`<sup>Optional</sup> <a name="RunIssueModelAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```csharp
public object RunIssueModelAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunPhraseMatcherAnnotatorInput`<sup>Optional</sup> <a name="RunPhraseMatcherAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```csharp
public object RunPhraseMatcherAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunQaAnnotatorInput`<sup>Optional</sup> <a name="RunQaAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```csharp
public object RunQaAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunSentimentAnnotatorInput`<sup>Optional</sup> <a name="RunSentimentAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```csharp
public object RunSentimentAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunSilenceAnnotatorInput`<sup>Optional</sup> <a name="RunSilenceAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```csharp
public object RunSilenceAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunSummarizationAnnotatorInput`<sup>Optional</sup> <a name="RunSummarizationAnnotatorInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```csharp
public object RunSummarizationAnnotatorInput { get; }
```

- *Type:* object

---

##### `SummarizationConfigInput`<sup>Optional</sup> <a name="SummarizationConfigInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig SummarizationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `IssueModels`<sup>Required</sup> <a name="IssueModels" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```csharp
public string[] IssueModels { get; }
```

- *Type:* string[]

---

##### `PhraseMatchers`<sup>Required</sup> <a name="PhraseMatchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```csharp
public string[] PhraseMatchers { get; }
```

- *Type:* string[]

---

##### `RunEntityAnnotator`<sup>Required</sup> <a name="RunEntityAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```csharp
public object RunEntityAnnotator { get; }
```

- *Type:* object

---

##### `RunIntentAnnotator`<sup>Required</sup> <a name="RunIntentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```csharp
public object RunIntentAnnotator { get; }
```

- *Type:* object

---

##### `RunInterruptionAnnotator`<sup>Required</sup> <a name="RunInterruptionAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```csharp
public object RunInterruptionAnnotator { get; }
```

- *Type:* object

---

##### `RunIssueModelAnnotator`<sup>Required</sup> <a name="RunIssueModelAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```csharp
public object RunIssueModelAnnotator { get; }
```

- *Type:* object

---

##### `RunPhraseMatcherAnnotator`<sup>Required</sup> <a name="RunPhraseMatcherAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```csharp
public object RunPhraseMatcherAnnotator { get; }
```

- *Type:* object

---

##### `RunQaAnnotator`<sup>Required</sup> <a name="RunQaAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```csharp
public object RunQaAnnotator { get; }
```

- *Type:* object

---

##### `RunSentimentAnnotator`<sup>Required</sup> <a name="RunSentimentAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```csharp
public object RunSentimentAnnotator { get; }
```

- *Type:* object

---

##### `RunSilenceAnnotator`<sup>Required</sup> <a name="RunSilenceAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```csharp
public object RunSilenceAnnotator { get; }
```

- *Type:* object

---

##### `RunSummarizationAnnotator`<sup>Required</sup> <a name="RunSummarizationAnnotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```csharp
public object RunSummarizationAnnotator { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">PutScorecardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">ResetScorecardList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScorecardList` <a name="PutScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```csharp
private void PutScorecardList(GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `ResetScorecardList` <a name="ResetScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```csharp
private void ResetScorecardList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">ScorecardList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">ScorecardListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScorecardList`<sup>Required</sup> <a name="ScorecardList" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference ScorecardList { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `ScorecardListInput`<sup>Optional</sup> <a name="ScorecardListInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct ScorecardListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">ResetQaScorecardRevisions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQaScorecardRevisions` <a name="ResetQaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```csharp
private void ResetQaScorecardRevisions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">QaScorecardRevisionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">QaScorecardRevisions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QaScorecardRevisionsInput`<sup>Optional</sup> <a name="QaScorecardRevisionsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```csharp
public string[] QaScorecardRevisionsInput { get; }
```

- *Type:* string[]

---

##### `QaScorecardRevisions`<sup>Required</sup> <a name="QaScorecardRevisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```csharp
public string[] QaScorecardRevisions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">ResetConversationProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">ResetSummarizationModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConversationProfile` <a name="ResetConversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```csharp
private void ResetConversationProfile()
```

##### `ResetSummarizationModel` <a name="ResetSummarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```csharp
private void ResetSummarizationModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">ConversationProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">SummarizationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">ConversationProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">SummarizationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationProfileInput`<sup>Optional</sup> <a name="ConversationProfileInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```csharp
public string ConversationProfileInput { get; }
```

- *Type:* string

---

##### `SummarizationModelInput`<sup>Optional</sup> <a name="SummarizationModelInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```csharp
public string SummarizationModelInput { get; }
```

- *Type:* string

---

##### `ConversationProfile`<sup>Required</sup> <a name="ConversationProfile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```csharp
public string ConversationProfile { get; }
```

- *Type:* string

---

##### `SummarizationModel`<sup>Required</sup> <a name="SummarizationModel" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```csharp
public string SummarizationModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



