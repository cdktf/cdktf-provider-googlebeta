# `googleOsConfigPatchDeployment` Submodule <a name="`googleOsConfigPatchDeployment` Submodule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOsConfigPatchDeployment <a name="GoogleOsConfigPatchDeployment" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment google_os_config_patch_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeployment(Construct Scope, string Id, GoogleOsConfigPatchDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig">GoogleOsConfigPatchDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig">GoogleOsConfigPatchDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter">PutInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putOneTimeSchedule">PutOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig">PutPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule">PutRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout">PutRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOneTimeSchedule">ResetOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetPatchConfig">ResetPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRecurringSchedule">ResetRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRollout">ResetRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceFilter` <a name="PutInstanceFilter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter"></a>

```csharp
private void PutInstanceFilter(GoogleOsConfigPatchDeploymentInstanceFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

---

##### `PutOneTimeSchedule` <a name="PutOneTimeSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putOneTimeSchedule"></a>

```csharp
private void PutOneTimeSchedule(GoogleOsConfigPatchDeploymentOneTimeSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putOneTimeSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `PutPatchConfig` <a name="PutPatchConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig"></a>

```csharp
private void PutPatchConfig(GoogleOsConfigPatchDeploymentPatchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

---

##### `PutRecurringSchedule` <a name="PutRecurringSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule"></a>

```csharp
private void PutRecurringSchedule(GoogleOsConfigPatchDeploymentRecurringSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

---

##### `PutRollout` <a name="PutRollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout"></a>

```csharp
private void PutRollout(GoogleOsConfigPatchDeploymentRollout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOsConfigPatchDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOneTimeSchedule` <a name="ResetOneTimeSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOneTimeSchedule"></a>

```csharp
private void ResetOneTimeSchedule()
```

##### `ResetPatchConfig` <a name="ResetPatchConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetPatchConfig"></a>

```csharp
private void ResetPatchConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRecurringSchedule` <a name="ResetRecurringSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRecurringSchedule"></a>

```csharp
private void ResetRecurringSchedule()
```

##### `ResetRollout` <a name="ResetRollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRollout"></a>

```csharp
private void ResetRollout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOsConfigPatchDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOsConfigPatchDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOsConfigPatchDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOsConfigPatchDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOsConfigPatchDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleOsConfigPatchDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOsConfigPatchDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOsConfigPatchDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOsConfigPatchDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilter">InstanceFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference">GoogleOsConfigPatchDeploymentInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lastExecuteTime">LastExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference">GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfig">PatchConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rollout">Rollout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference">GoogleOsConfigPatchDeploymentRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference">GoogleOsConfigPatchDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilterInput">InstanceFilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeScheduleInput">OneTimeScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfigInput">PatchConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentIdInput">PatchDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringScheduleInput">RecurringScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentId">PatchDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `InstanceFilter`<sup>Required</sup> <a name="InstanceFilter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilter"></a>

```csharp
public GoogleOsConfigPatchDeploymentInstanceFilterOutputReference InstanceFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference">GoogleOsConfigPatchDeploymentInstanceFilterOutputReference</a>

---

##### `LastExecuteTime`<sup>Required</sup> <a name="LastExecuteTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lastExecuteTime"></a>

```csharp
public string LastExecuteTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OneTimeSchedule`<sup>Required</sup> <a name="OneTimeSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeSchedule"></a>

```csharp
public GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference OneTimeSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference">GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference</a>

---

##### `PatchConfig`<sup>Required</sup> <a name="PatchConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigOutputReference PatchConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigOutputReference</a>

---

##### `RecurringSchedule`<sup>Required</sup> <a name="RecurringSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringSchedule"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference RecurringSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rollout"></a>

```csharp
public GoogleOsConfigPatchDeploymentRolloutOutputReference Rollout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference">GoogleOsConfigPatchDeploymentRolloutOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeouts"></a>

```csharp
public GoogleOsConfigPatchDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference">GoogleOsConfigPatchDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceFilterInput`<sup>Optional</sup> <a name="InstanceFilterInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilterInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentInstanceFilter InstanceFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

---

##### `OneTimeScheduleInput`<sup>Optional</sup> <a name="OneTimeScheduleInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeScheduleInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentOneTimeSchedule OneTimeScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `PatchConfigInput`<sup>Optional</sup> <a name="PatchConfigInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfigInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfig PatchConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

---

##### `PatchDeploymentIdInput`<sup>Optional</sup> <a name="PatchDeploymentIdInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentIdInput"></a>

```csharp
public string PatchDeploymentIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RecurringScheduleInput`<sup>Optional</sup> <a name="RecurringScheduleInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringScheduleInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringSchedule RecurringScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rolloutInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRollout RolloutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PatchDeploymentId`<sup>Required</sup> <a name="PatchDeploymentId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentId"></a>

```csharp
public string PatchDeploymentId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOsConfigPatchDeploymentConfig <a name="GoogleOsConfigPatchDeploymentConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleOsConfigPatchDeploymentInstanceFilter InstanceFilter,
    string PatchDeploymentId,
    string Description = null,
    string Duration = null,
    string Id = null,
    GoogleOsConfigPatchDeploymentOneTimeSchedule OneTimeSchedule = null,
    GoogleOsConfigPatchDeploymentPatchConfig PatchConfig = null,
    string Project = null,
    GoogleOsConfigPatchDeploymentRecurringSchedule RecurringSchedule = null,
    GoogleOsConfigPatchDeploymentRollout Rollout = null,
    GoogleOsConfigPatchDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.instanceFilter">InstanceFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchDeploymentId">PatchDeploymentId</a></code> | <code>string</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.duration">Duration</a></code> | <code>string</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchConfig">PatchConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.rollout">Rollout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceFilter`<sup>Required</sup> <a name="InstanceFilter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.instanceFilter"></a>

```csharp
public GoogleOsConfigPatchDeploymentInstanceFilter InstanceFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#instance_filter GoogleOsConfigPatchDeployment#instance_filter}

---

##### `PatchDeploymentId`<sup>Required</sup> <a name="PatchDeploymentId" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchDeploymentId"></a>

```csharp
public string PatchDeploymentId { get; set; }
```

- *Type:* string

A name for the patch deployment in the project.

When creating a name the following rules apply:

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#patch_deployment_id GoogleOsConfigPatchDeployment#patch_deployment_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#description GoogleOsConfigPatchDeployment#description}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#duration GoogleOsConfigPatchDeployment#duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OneTimeSchedule`<sup>Optional</sup> <a name="OneTimeSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.oneTimeSchedule"></a>

```csharp
public GoogleOsConfigPatchDeploymentOneTimeSchedule OneTimeSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#one_time_schedule GoogleOsConfigPatchDeployment#one_time_schedule}

---

##### `PatchConfig`<sup>Optional</sup> <a name="PatchConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfig PatchConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#patch_config GoogleOsConfigPatchDeployment#patch_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}.

---

##### `RecurringSchedule`<sup>Optional</sup> <a name="RecurringSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.recurringSchedule"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringSchedule RecurringSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#recurring_schedule GoogleOsConfigPatchDeployment#recurring_schedule}

---

##### `Rollout`<sup>Optional</sup> <a name="Rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.rollout"></a>

```csharp
public GoogleOsConfigPatchDeploymentRollout Rollout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#rollout GoogleOsConfigPatchDeployment#rollout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.timeouts"></a>

```csharp
public GoogleOsConfigPatchDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#timeouts GoogleOsConfigPatchDeployment#timeouts}

---

### GoogleOsConfigPatchDeploymentInstanceFilter <a name="GoogleOsConfigPatchDeploymentInstanceFilter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentInstanceFilter {
    object All = null,
    object GroupLabels = null,
    string[] InstanceNamePrefixes = null,
    string[] Instances = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.all">All</a></code> | <code>object</code> | Target all VM instances in the project. If true, no other criteria is permitted. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.groupLabels">GroupLabels</a></code> | <code>object</code> | group_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>string[]</code> | Targets VMs whose name starts with one of these prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instances">Instances</a></code> | <code>string[]</code> | Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.zones">Zones</a></code> | <code>string[]</code> | Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

Target all VM instances in the project. If true, no other criteria is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#all GoogleOsConfigPatchDeployment#all}

---

##### `GroupLabels`<sup>Optional</sup> <a name="GroupLabels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.groupLabels"></a>

```csharp
public object GroupLabels { get; set; }
```

- *Type:* object

group_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#group_labels GoogleOsConfigPatchDeployment#group_labels}

---

##### `InstanceNamePrefixes`<sup>Optional</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes"></a>

```csharp
public string[] InstanceNamePrefixes { get; set; }
```

- *Type:* string[]

Targets VMs whose name starts with one of these prefixes.

Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#instance_name_prefixes GoogleOsConfigPatchDeployment#instance_name_prefixes}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#instances GoogleOsConfigPatchDeployment#instances}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#zones GoogleOsConfigPatchDeployment#zones}

---

### GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels <a name="GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels {
    System.Collections.Generic.IDictionary<string, string> Labels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#labels GoogleOsConfigPatchDeployment#labels}

---

### GoogleOsConfigPatchDeploymentOneTimeSchedule <a name="GoogleOsConfigPatchDeploymentOneTimeSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentOneTimeSchedule {
    string ExecuteTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule.property.executeTime">ExecuteTime</a></code> | <code>string</code> | The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |

---

##### `ExecuteTime`<sup>Required</sup> <a name="ExecuteTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule.property.executeTime"></a>

```csharp
public string ExecuteTime { get; set; }
```

- *Type:* string

The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#execute_time GoogleOsConfigPatchDeployment#execute_time}

---

### GoogleOsConfigPatchDeploymentPatchConfig <a name="GoogleOsConfigPatchDeploymentPatchConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfig {
    GoogleOsConfigPatchDeploymentPatchConfigApt Apt = null,
    GoogleOsConfigPatchDeploymentPatchConfigGoo Goo = null,
    object MigInstancesAllowed = null,
    GoogleOsConfigPatchDeploymentPatchConfigPostStep PostStep = null,
    GoogleOsConfigPatchDeploymentPatchConfigPreStep PreStep = null,
    string RebootConfig = null,
    GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate WindowsUpdate = null,
    GoogleOsConfigPatchDeploymentPatchConfigYum Yum = null,
    GoogleOsConfigPatchDeploymentPatchConfigZypper Zypper = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a></code> | apt block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a></code> | goo block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed">MigInstancesAllowed</a></code> | <code>object</code> | Allows the patch job to run on Managed instance groups (MIGs). |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.postStep">PostStep</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a></code> | post_step block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.preStep">PreStep</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a></code> | pre_step block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.rebootConfig">RebootConfig</a></code> | <code>string</code> | Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.windowsUpdate">WindowsUpdate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | windows_update block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a></code> | yum block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a></code> | zypper block. |

---

##### `Apt`<sup>Optional</sup> <a name="Apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.apt"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigApt Apt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

apt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#apt GoogleOsConfigPatchDeployment#apt}

---

##### `Goo`<sup>Optional</sup> <a name="Goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.goo"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigGoo Goo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

goo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#goo GoogleOsConfigPatchDeployment#goo}

---

##### `MigInstancesAllowed`<sup>Optional</sup> <a name="MigInstancesAllowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed"></a>

```csharp
public object MigInstancesAllowed { get; set; }
```

- *Type:* object

Allows the patch job to run on Managed instance groups (MIGs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#mig_instances_allowed GoogleOsConfigPatchDeployment#mig_instances_allowed}

---

##### `PostStep`<sup>Optional</sup> <a name="PostStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.postStep"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStep PostStep { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

post_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#post_step GoogleOsConfigPatchDeployment#post_step}

---

##### `PreStep`<sup>Optional</sup> <a name="PreStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.preStep"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStep PreStep { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

pre_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#pre_step GoogleOsConfigPatchDeployment#pre_step}

---

##### `RebootConfig`<sup>Optional</sup> <a name="RebootConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.rebootConfig"></a>

```csharp
public string RebootConfig { get; set; }
```

- *Type:* string

Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#reboot_config GoogleOsConfigPatchDeployment#reboot_config}

---

##### `WindowsUpdate`<sup>Optional</sup> <a name="WindowsUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.windowsUpdate"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate WindowsUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

windows_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#windows_update GoogleOsConfigPatchDeployment#windows_update}

---

##### `Yum`<sup>Optional</sup> <a name="Yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.yum"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigYum Yum { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

yum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#yum GoogleOsConfigPatchDeployment#yum}

---

##### `Zypper`<sup>Optional</sup> <a name="Zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.zypper"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigZypper Zypper { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#zypper GoogleOsConfigPatchDeployment#zypper}

---

### GoogleOsConfigPatchDeploymentPatchConfigApt <a name="GoogleOsConfigPatchDeploymentPatchConfigApt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigApt {
    string[] Excludes = null,
    string[] ExclusivePackages = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.excludes">Excludes</a></code> | <code>string[]</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.type">Type</a></code> | <code>string</code> | By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `ExclusivePackages`<sup>Optional</sup> <a name="ExclusivePackages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; set; }
```

- *Type:* string[]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#type GoogleOsConfigPatchDeployment#type}

---

### GoogleOsConfigPatchDeploymentPatchConfigGoo <a name="GoogleOsConfigPatchDeploymentPatchConfigGoo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigGoo {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo.property.enabled">Enabled</a></code> | <code>object</code> | goo update settings. Use this setting to override the default goo patch rules. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

goo update settings. Use this setting to override the default goo patch rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#enabled GoogleOsConfigPatchDeployment#enabled}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStep <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStep {
    GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig LinuxExecStepConfig = null,
    GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig WindowsExecStepConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `LinuxExecStepConfig`<sup>Optional</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig LinuxExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}

---

##### `WindowsExecStepConfig`<sup>Optional</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig WindowsExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
    double[] AllowedSuccessCodes = null,
    GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
    double[] AllowedSuccessCodes = null,
    GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStep <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStep {
    GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig LinuxExecStepConfig = null,
    GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig WindowsExecStepConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `LinuxExecStepConfig`<sup>Optional</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig LinuxExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}

---

##### `WindowsExecStepConfig`<sup>Optional</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig WindowsExecStepConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
    double[] AllowedSuccessCodes = null,
    GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
    double[] AllowedSuccessCodes = null,
    GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject GcsObject = null,
    string Interpreter = null,
    string LocalPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter">Interpreter</a></code> | <code>string</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath">LocalPath</a></code> | <code>string</code> | An absolute path to the executable on the VM. |

---

##### `AllowedSuccessCodes`<sup>Optional</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; set; }
```

- *Type:* double[]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `GcsObject`<sup>Optional</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject GcsObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter"></a>

```csharp
public string Interpreter { get; set; }
```

- *Type:* string

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
    string Bucket,
    string GenerationNumber,
    string Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket">Bucket</a></code> | <code>string</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object">Object</a></code> | <code>string</code> | Name of the Cloud Storage object. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; set; }
```

- *Type:* string

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate <a name="GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate {
    string[] Classifications = null,
    string[] Excludes = null,
    string[] ExclusivePatches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications">Classifications</a></code> | <code>string[]</code> | Only apply updates of these windows update classifications. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes">Excludes</a></code> | <code>string[]</code> | List of KBs to exclude from update. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | An exclusive list of kbs to be updated. |

---

##### `Classifications`<sup>Optional</sup> <a name="Classifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications"></a>

```csharp
public string[] Classifications { get; set; }
```

- *Type:* string[]

Only apply updates of these windows update classifications.

If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#classifications GoogleOsConfigPatchDeployment#classifications}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of KBs to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `ExclusivePatches`<sup>Optional</sup> <a name="ExclusivePatches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; set; }
```

- *Type:* string[]

An exclusive list of kbs to be updated.

These are the only patches that will be updated.
This field must not be used with other patch configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}

---

### GoogleOsConfigPatchDeploymentPatchConfigYum <a name="GoogleOsConfigPatchDeploymentPatchConfigYum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigYum {
    string[] Excludes = null,
    string[] ExclusivePackages = null,
    object Minimal = null,
    object Security = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.excludes">Excludes</a></code> | <code>string[]</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.minimal">Minimal</a></code> | <code>object</code> | Will cause patch to run yum update-minimal instead. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.security">Security</a></code> | <code>object</code> | Adds the --security flag to yum update. Not supported on all platforms. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `ExclusivePackages`<sup>Optional</sup> <a name="ExclusivePackages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; set; }
```

- *Type:* string[]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}

---

##### `Minimal`<sup>Optional</sup> <a name="Minimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.minimal"></a>

```csharp
public object Minimal { get; set; }
```

- *Type:* object

Will cause patch to run yum update-minimal instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#minimal GoogleOsConfigPatchDeployment#minimal}

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.security"></a>

```csharp
public object Security { get; set; }
```

- *Type:* object

Adds the --security flag to yum update. Not supported on all platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#security GoogleOsConfigPatchDeployment#security}

---

### GoogleOsConfigPatchDeploymentPatchConfigZypper <a name="GoogleOsConfigPatchDeploymentPatchConfigZypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigZypper {
    string[] Categories = null,
    string[] Excludes = null,
    string[] ExclusivePatches = null,
    string[] Severities = null,
    object WithOptional = null,
    object WithUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.categories">Categories</a></code> | <code>string[]</code> | Install only patches with these categories. Common categories include security, recommended, and feature. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.excludes">Excludes</a></code> | <code>string[]</code> | List of packages to exclude from update. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | An exclusive list of patches to be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.severities">Severities</a></code> | <code>string[]</code> | Install only patches with these severities. Common severities include critical, important, moderate, and low. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withOptional">WithOptional</a></code> | <code>object</code> | Adds the --with-optional flag to zypper patch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withUpdate">WithUpdate</a></code> | <code>object</code> | Adds the --with-update flag, to zypper patch. |

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Install only patches with these categories. Common categories include security, recommended, and feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#categories GoogleOsConfigPatchDeployment#categories}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

List of packages to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `ExclusivePatches`<sup>Optional</sup> <a name="ExclusivePatches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; set; }
```

- *Type:* string[]

An exclusive list of patches to be updated.

These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.severities"></a>

```csharp
public string[] Severities { get; set; }
```

- *Type:* string[]

Install only patches with these severities. Common severities include critical, important, moderate, and low.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#severities GoogleOsConfigPatchDeployment#severities}

---

##### `WithOptional`<sup>Optional</sup> <a name="WithOptional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withOptional"></a>

```csharp
public object WithOptional { get; set; }
```

- *Type:* object

Adds the --with-optional flag to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#with_optional GoogleOsConfigPatchDeployment#with_optional}

---

##### `WithUpdate`<sup>Optional</sup> <a name="WithUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withUpdate"></a>

```csharp
public object WithUpdate { get; set; }
```

- *Type:* object

Adds the --with-update flag, to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#with_update GoogleOsConfigPatchDeployment#with_update}

---

### GoogleOsConfigPatchDeploymentRecurringSchedule <a name="GoogleOsConfigPatchDeploymentRecurringSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringSchedule {
    GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay TimeOfDay,
    GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone TimeZone,
    string EndTime = null,
    GoogleOsConfigPatchDeploymentRecurringScheduleMonthly Monthly = null,
    string StartTime = null,
    GoogleOsConfigPatchDeploymentRecurringScheduleWeekly Weekly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeOfDay">TimeOfDay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | time_of_day block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | time_zone block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.endTime">EndTime</a></code> | <code>string</code> | The end time at which a recurring patch deployment schedule is no longer active. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | monthly block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.startTime">StartTime</a></code> | <code>string</code> | The time that the recurring schedule becomes effective. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | weekly block. |

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeOfDay"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay TimeOfDay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#time_of_day GoogleOsConfigPatchDeployment#time_of_day}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeZone"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#time_zone GoogleOsConfigPatchDeployment#time_zone}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end time at which a recurring patch deployment schedule is no longer active.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#end_time GoogleOsConfigPatchDeployment#end_time}

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.monthly"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthly Monthly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#monthly GoogleOsConfigPatchDeployment#monthly}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time that the recurring schedule becomes effective.

Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#start_time GoogleOsConfigPatchDeployment#start_time}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.weekly"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleWeekly Weekly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#weekly GoogleOsConfigPatchDeployment#weekly}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleMonthly <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleMonthly {
    double MonthDay = null,
    GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth WeekDayOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay">MonthDay</a></code> | <code>double</code> | One day of the month. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `MonthDay`<sup>Optional</sup> <a name="MonthDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay"></a>

```csharp
public double MonthDay { get; set; }
```

- *Type:* double

One day of the month.

1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#month_day GoogleOsConfigPatchDeployment#month_day}

---

##### `WeekDayOfMonth`<sup>Optional</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth WeekDayOfMonth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#week_day_of_month GoogleOsConfigPatchDeployment#week_day_of_month}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
    string DayOfWeek,
    double WeekOrdinal,
    double DayOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal">WeekOrdinal</a></code> | <code>double</code> | Week number in a month. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset">DayOffset</a></code> | <code>double</code> | Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}

---

##### `WeekOrdinal`<sup>Required</sup> <a name="WeekOrdinal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal"></a>

```csharp
public double WeekOrdinal { get; set; }
```

- *Type:* double

Week number in a month.

1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#week_ordinal GoogleOsConfigPatchDeployment#week_ordinal}

---

##### `DayOffset`<sup>Optional</sup> <a name="DayOffset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset"></a>

```csharp
public double DayOffset { get; set; }
```

- *Type:* double

Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#day_offset GoogleOsConfigPatchDeployment#day_offset}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#hours GoogleOsConfigPatchDeployment#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#minutes GoogleOsConfigPatchDeployment#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#nanos GoogleOsConfigPatchDeployment#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time.

Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#seconds GoogleOsConfigPatchDeployment#seconds}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone {
    string Id,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.version">Version</a></code> | <code>string</code> | IANA Time Zone Database version number, e.g. "2019a". |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

IANA Time Zone Database version number, e.g. "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#version GoogleOsConfigPatchDeployment#version}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleWeekly <a name="GoogleOsConfigPatchDeploymentRecurringScheduleWeekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleWeekly {
    string DayOfWeek
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}

---

### GoogleOsConfigPatchDeploymentRollout <a name="GoogleOsConfigPatchDeploymentRollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRollout {
    GoogleOsConfigPatchDeploymentRolloutDisruptionBudget DisruptionBudget,
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.disruptionBudget">DisruptionBudget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | disruption_budget block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.mode">Mode</a></code> | <code>string</code> | Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]. |

---

##### `DisruptionBudget`<sup>Required</sup> <a name="DisruptionBudget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.disruptionBudget"></a>

```csharp
public GoogleOsConfigPatchDeploymentRolloutDisruptionBudget DisruptionBudget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

disruption_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#disruption_budget GoogleOsConfigPatchDeployment#disruption_budget}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#mode GoogleOsConfigPatchDeployment#mode}

---

### GoogleOsConfigPatchDeploymentRolloutDisruptionBudget <a name="GoogleOsConfigPatchDeploymentRolloutDisruptionBudget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRolloutDisruptionBudget {
    double Fixed = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed">Fixed</a></code> | <code>double</code> | Specifies a fixed value. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage">Percentage</a></code> | <code>double</code> | Specifies the relative value defined as a percentage, which will be multiplied by a reference value. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

Specifies a fixed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#fixed GoogleOsConfigPatchDeployment#fixed}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#percentage GoogleOsConfigPatchDeployment#percentage}

---

### GoogleOsConfigPatchDeploymentTimeouts <a name="GoogleOsConfigPatchDeploymentTimeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#create GoogleOsConfigPatchDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#delete GoogleOsConfigPatchDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#create GoogleOsConfigPatchDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_os_config_patch_deployment#delete GoogleOsConfigPatchDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList <a name="GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.get"></a>

```csharp
private GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference <a name="GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleOsConfigPatchDeploymentInstanceFilterOutputReference <a name="GoogleOsConfigPatchDeploymentInstanceFilterOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentInstanceFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels">PutGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels">ResetGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes">ResetInstanceNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupLabels` <a name="PutGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels"></a>

```csharp
private void PutGroupLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels.parameter.value"></a>

- *Type:* object

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetGroupLabels` <a name="ResetGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels"></a>

```csharp
private void ResetGroupLabels()
```

##### `ResetInstanceNamePrefixes` <a name="ResetInstanceNamePrefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes"></a>

```csharp
private void ResetInstanceNamePrefixes()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetZones"></a>

```csharp
private void ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels">GroupLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput">GroupLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput">InstanceNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupLabels`<sup>Required</sup> <a name="GroupLabels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels"></a>

```csharp
public GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList GroupLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `GroupLabelsInput`<sup>Optional</sup> <a name="GroupLabelsInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput"></a>

```csharp
public object GroupLabelsInput { get; }
```

- *Type:* object

---

##### `InstanceNamePrefixesInput`<sup>Optional</sup> <a name="InstanceNamePrefixesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput"></a>

```csharp
public string[] InstanceNamePrefixesInput { get; }
```

- *Type:* string[]

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `InstanceNamePrefixes`<sup>Required</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes"></a>

```csharp
public string[] InstanceNamePrefixes { get; }
```

- *Type:* string[]

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentInstanceFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

---


### GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference <a name="GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput">ExecuteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime">ExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecuteTimeInput`<sup>Optional</sup> <a name="ExecuteTimeInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput"></a>

```csharp
public string ExecuteTimeInput { get; }
```

- *Type:* string

---

##### `ExecuteTime`<sup>Required</sup> <a name="ExecuteTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime"></a>

```csharp
public string ExecuteTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentOneTimeSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages">ResetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePackages` <a name="ResetExclusivePackages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages"></a>

```csharp
private void ResetExclusivePackages()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput">ExclusivePackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePackagesInput`<sup>Optional</sup> <a name="ExclusivePackagesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput"></a>

```csharp
public string[] ExclusivePackagesInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePackages`<sup>Required</sup> <a name="ExclusivePackages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigApt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigGoo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt">PutApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putGoo">PutGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep">PutPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep">PutPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate">PutWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum">PutYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper">PutZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetApt">ResetApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetGoo">ResetGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed">ResetMigInstancesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep">ResetPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep">ResetPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig">ResetRebootConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate">ResetWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetYum">ResetYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetZypper">ResetZypper</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApt` <a name="PutApt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt"></a>

```csharp
private void PutApt(GoogleOsConfigPatchDeploymentPatchConfigApt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

---

##### `PutGoo` <a name="PutGoo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putGoo"></a>

```csharp
private void PutGoo(GoogleOsConfigPatchDeploymentPatchConfigGoo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putGoo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `PutPostStep` <a name="PutPostStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep"></a>

```csharp
private void PutPostStep(GoogleOsConfigPatchDeploymentPatchConfigPostStep Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `PutPreStep` <a name="PutPreStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep"></a>

```csharp
private void PutPreStep(GoogleOsConfigPatchDeploymentPatchConfigPreStep Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `PutWindowsUpdate` <a name="PutWindowsUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate"></a>

```csharp
private void PutWindowsUpdate(GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `PutYum` <a name="PutYum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum"></a>

```csharp
private void PutYum(GoogleOsConfigPatchDeploymentPatchConfigYum Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

---

##### `PutZypper` <a name="PutZypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper"></a>

```csharp
private void PutZypper(GoogleOsConfigPatchDeploymentPatchConfigZypper Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `ResetApt` <a name="ResetApt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetApt"></a>

```csharp
private void ResetApt()
```

##### `ResetGoo` <a name="ResetGoo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetGoo"></a>

```csharp
private void ResetGoo()
```

##### `ResetMigInstancesAllowed` <a name="ResetMigInstancesAllowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed"></a>

```csharp
private void ResetMigInstancesAllowed()
```

##### `ResetPostStep` <a name="ResetPostStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep"></a>

```csharp
private void ResetPostStep()
```

##### `ResetPreStep` <a name="ResetPreStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep"></a>

```csharp
private void ResetPreStep()
```

##### `ResetRebootConfig` <a name="ResetRebootConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig"></a>

```csharp
private void ResetRebootConfig()
```

##### `ResetWindowsUpdate` <a name="ResetWindowsUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate"></a>

```csharp
private void ResetWindowsUpdate()
```

##### `ResetYum` <a name="ResetYum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetYum"></a>

```csharp
private void ResetYum()
```

##### `ResetZypper` <a name="ResetZypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetZypper"></a>

```csharp
private void ResetZypper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference">GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference">GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStep">PostStep</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStep">PreStep</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate">WindowsUpdate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference">GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference">GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput">AptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput">GooInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput">MigInstancesAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput">PostStepInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput">PreStepInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput">RebootConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput">WindowsUpdateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput">YumInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput">ZypperInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed">MigInstancesAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig">RebootConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Apt`<sup>Required</sup> <a name="Apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.apt"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference Apt { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference">GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference</a>

---

##### `Goo`<sup>Required</sup> <a name="Goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.goo"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference Goo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference">GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference</a>

---

##### `PostStep`<sup>Required</sup> <a name="PostStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStep"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference PostStep { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference</a>

---

##### `PreStep`<sup>Required</sup> <a name="PreStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStep"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference PreStep { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference</a>

---

##### `WindowsUpdate`<sup>Required</sup> <a name="WindowsUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference WindowsUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a>

---

##### `Yum`<sup>Required</sup> <a name="Yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yum"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference Yum { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference">GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference</a>

---

##### `Zypper`<sup>Required</sup> <a name="Zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypper"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference Zypper { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference">GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference</a>

---

##### `AptInput`<sup>Optional</sup> <a name="AptInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigApt AptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

---

##### `GooInput`<sup>Optional</sup> <a name="GooInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigGoo GooInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `MigInstancesAllowedInput`<sup>Optional</sup> <a name="MigInstancesAllowedInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput"></a>

```csharp
public object MigInstancesAllowedInput { get; }
```

- *Type:* object

---

##### `PostStepInput`<sup>Optional</sup> <a name="PostStepInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStep PostStepInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `PreStepInput`<sup>Optional</sup> <a name="PreStepInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStep PreStepInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `RebootConfigInput`<sup>Optional</sup> <a name="RebootConfigInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput"></a>

```csharp
public string RebootConfigInput { get; }
```

- *Type:* string

---

##### `WindowsUpdateInput`<sup>Optional</sup> <a name="WindowsUpdateInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate WindowsUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `YumInput`<sup>Optional</sup> <a name="YumInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigYum YumInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

---

##### `ZypperInput`<sup>Optional</sup> <a name="ZypperInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigZypper ZypperInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `MigInstancesAllowed`<sup>Required</sup> <a name="MigInstancesAllowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed"></a>

```csharp
public object MigInstancesAllowed { get; }
```

- *Type:* object

---

##### `RebootConfig`<sup>Required</sup> <a name="RebootConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig"></a>

```csharp
public string RebootConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig">PutLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig">PutWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig">ResetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig">ResetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxExecStepConfig` <a name="PutLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig"></a>

```csharp
private void PutLinuxExecStepConfig(GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `PutWindowsExecStepConfig` <a name="PutWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig"></a>

```csharp
private void PutWindowsExecStepConfig(GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `ResetLinuxExecStepConfig` <a name="ResetLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig"></a>

```csharp
private void ResetLinuxExecStepConfig()
```

##### `ResetWindowsExecStepConfig` <a name="ResetWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig"></a>

```csharp
private void ResetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput">LinuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput">WindowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxExecStepConfig`<sup>Required</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference LinuxExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a>

---

##### `WindowsExecStepConfig`<sup>Required</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference WindowsExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a>

---

##### `LinuxExecStepConfigInput`<sup>Optional</sup> <a name="LinuxExecStepConfigInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig LinuxExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `WindowsExecStepConfigInput`<sup>Optional</sup> <a name="WindowsExecStepConfigInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig WindowsExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStep InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig">PutLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig">PutWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig">ResetLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig">ResetWindowsExecStepConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxExecStepConfig` <a name="PutLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig"></a>

```csharp
private void PutLinuxExecStepConfig(GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `PutWindowsExecStepConfig` <a name="PutWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig"></a>

```csharp
private void PutWindowsExecStepConfig(GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `ResetLinuxExecStepConfig` <a name="ResetLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig"></a>

```csharp
private void ResetLinuxExecStepConfig()
```

##### `ResetWindowsExecStepConfig` <a name="ResetWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig"></a>

```csharp
private void ResetWindowsExecStepConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig">LinuxExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig">WindowsExecStepConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput">LinuxExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput">WindowsExecStepConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxExecStepConfig`<sup>Required</sup> <a name="LinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference LinuxExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a>

---

##### `WindowsExecStepConfig`<sup>Required</sup> <a name="WindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference WindowsExecStepConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a>

---

##### `LinuxExecStepConfigInput`<sup>Optional</sup> <a name="LinuxExecStepConfigInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig LinuxExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `WindowsExecStepConfigInput`<sup>Optional</sup> <a name="WindowsExecStepConfigInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig WindowsExecStepConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStep InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">GenerationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">GenerationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationNumberInput`<sup>Optional</sup> <a name="GenerationNumberInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```csharp
public string GenerationNumberInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GenerationNumber`<sup>Required</sup> <a name="GenerationNumber" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```csharp
public string GenerationNumber { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject">PutGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">ResetAllowedSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject">ResetGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsObject` <a name="PutGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```csharp
private void PutGcsObject(GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `ResetAllowedSuccessCodes` <a name="ResetAllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```csharp
private void ResetAllowedSuccessCodes()
```

##### `ResetGcsObject` <a name="ResetGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```csharp
private void ResetGcsObject()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```csharp
private void ResetInterpreter()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject">GcsObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">AllowedSuccessCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">GcsObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">AllowedSuccessCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter">Interpreter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsObject`<sup>Required</sup> <a name="GcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference GcsObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `AllowedSuccessCodesInput`<sup>Optional</sup> <a name="AllowedSuccessCodesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```csharp
public double[] AllowedSuccessCodesInput { get; }
```

- *Type:* double[]

---

##### `GcsObjectInput`<sup>Optional</sup> <a name="GcsObjectInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject GcsObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```csharp
public string InterpreterInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `AllowedSuccessCodes`<sup>Required</sup> <a name="AllowedSuccessCodes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```csharp
public double[] AllowedSuccessCodes { get; }
```

- *Type:* double[]

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```csharp
public string Interpreter { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications">ResetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches">ResetExclusivePatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassifications` <a name="ResetClassifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications"></a>

```csharp
private void ResetClassifications()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePatches` <a name="ResetExclusivePatches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches"></a>

```csharp
private void ResetExclusivePatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput">ClassificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput">ExclusivePatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications">Classifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationsInput`<sup>Optional</sup> <a name="ClassificationsInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput"></a>

```csharp
public string[] ClassificationsInput { get; }
```

- *Type:* string[]

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePatchesInput`<sup>Optional</sup> <a name="ExclusivePatchesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput"></a>

```csharp
public string[] ExclusivePatchesInput { get; }
```

- *Type:* string[]

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications"></a>

```csharp
public string[] Classifications { get; }
```

- *Type:* string[]

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePatches`<sup>Required</sup> <a name="ExclusivePatches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages">ResetExclusivePackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal">ResetMinimal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity">ResetSecurity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePackages` <a name="ResetExclusivePackages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages"></a>

```csharp
private void ResetExclusivePackages()
```

##### `ResetMinimal` <a name="ResetMinimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal"></a>

```csharp
private void ResetMinimal()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity"></a>

```csharp
private void ResetSecurity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput">ExclusivePackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput">MinimalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput">SecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages">ExclusivePackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal">Minimal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.security">Security</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePackagesInput`<sup>Optional</sup> <a name="ExclusivePackagesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput"></a>

```csharp
public string[] ExclusivePackagesInput { get; }
```

- *Type:* string[]

---

##### `MinimalInput`<sup>Optional</sup> <a name="MinimalInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput"></a>

```csharp
public object MinimalInput { get; }
```

- *Type:* object

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput"></a>

```csharp
public object SecurityInput { get; }
```

- *Type:* object

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePackages`<sup>Required</sup> <a name="ExclusivePackages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages"></a>

```csharp
public string[] ExclusivePackages { get; }
```

- *Type:* string[]

---

##### `Minimal`<sup>Required</sup> <a name="Minimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal"></a>

```csharp
public object Minimal { get; }
```

- *Type:* object

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.security"></a>

```csharp
public object Security { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigYum InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches">ResetExclusivePatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional">ResetWithOptional</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate">ResetWithUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExclusivePatches` <a name="ResetExclusivePatches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches"></a>

```csharp
private void ResetExclusivePatches()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities"></a>

```csharp
private void ResetSeverities()
```

##### `ResetWithOptional` <a name="ResetWithOptional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional"></a>

```csharp
private void ResetWithOptional()
```

##### `ResetWithUpdate` <a name="ResetWithUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate"></a>

```csharp
private void ResetWithUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput">ExclusivePatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput">WithOptionalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput">WithUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches">ExclusivePatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities">Severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional">WithOptional</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate">WithUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExclusivePatchesInput`<sup>Optional</sup> <a name="ExclusivePatchesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput"></a>

```csharp
public string[] ExclusivePatchesInput { get; }
```

- *Type:* string[]

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput"></a>

```csharp
public string[] SeveritiesInput { get; }
```

- *Type:* string[]

---

##### `WithOptionalInput`<sup>Optional</sup> <a name="WithOptionalInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput"></a>

```csharp
public object WithOptionalInput { get; }
```

- *Type:* object

---

##### `WithUpdateInput`<sup>Optional</sup> <a name="WithUpdateInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput"></a>

```csharp
public object WithUpdateInput { get; }
```

- *Type:* object

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExclusivePatches`<sup>Required</sup> <a name="ExclusivePatches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches"></a>

```csharp
public string[] ExclusivePatches { get; }
```

- *Type:* string[]

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities"></a>

```csharp
public string[] Severities { get; }
```

- *Type:* string[]

---

##### `WithOptional`<sup>Required</sup> <a name="WithOptional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional"></a>

```csharp
public object WithOptional { get; }
```

- *Type:* object

---

##### `WithUpdate`<sup>Required</sup> <a name="WithUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate"></a>

```csharp
public object WithUpdate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentPatchConfigZypper InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth">PutWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay">ResetMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth">ResetWeekDayOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayOfMonth` <a name="PutWeekDayOfMonth" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth"></a>

```csharp
private void PutWeekDayOfMonth(GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `ResetMonthDay` <a name="ResetMonthDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay"></a>

```csharp
private void ResetMonthDay()
```

##### `ResetWeekDayOfMonth` <a name="ResetWeekDayOfMonth" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth"></a>

```csharp
private void ResetWeekDayOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth">WeekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput">MonthDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput">WeekDayOfMonthInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay">MonthDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayOfMonth`<sup>Required</sup> <a name="WeekDayOfMonth" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference WeekDayOfMonth { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a>

---

##### `MonthDayInput`<sup>Optional</sup> <a name="MonthDayInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput"></a>

```csharp
public double MonthDayInput { get; }
```

- *Type:* double

---

##### `WeekDayOfMonthInput`<sup>Optional</sup> <a name="WeekDayOfMonthInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth WeekDayOfMonthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `MonthDay`<sup>Required</sup> <a name="MonthDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay"></a>

```csharp
public double MonthDay { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset">ResetDayOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOffset` <a name="ResetDayOffset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset"></a>

```csharp
private void ResetDayOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput">DayOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput">WeekOrdinalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset">DayOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal">WeekOrdinal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOffsetInput`<sup>Optional</sup> <a name="DayOffsetInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput"></a>

```csharp
public double DayOffsetInput { get; }
```

- *Type:* double

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `WeekOrdinalInput`<sup>Optional</sup> <a name="WeekOrdinalInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput"></a>

```csharp
public double WeekOrdinalInput { get; }
```

- *Type:* double

---

##### `DayOffset`<sup>Required</sup> <a name="DayOffset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset"></a>

```csharp
public double DayOffset { get; }
```

- *Type:* double

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `WeekOrdinal`<sup>Required</sup> <a name="WeekOrdinal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal"></a>

```csharp
public double WeekOrdinal { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay">PutTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthly` <a name="PutMonthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly"></a>

```csharp
private void PutMonthly(GoogleOsConfigPatchDeploymentRecurringScheduleMonthly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `PutTimeOfDay` <a name="PutTimeOfDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay"></a>

```csharp
private void PutTimeOfDay(GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly"></a>

```csharp
private void PutWeekly(GoogleOsConfigPatchDeploymentRecurringScheduleWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly"></a>

```csharp
private void ResetMonthly()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly"></a>

```csharp
private void ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime">LastExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime">NextExecuteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastExecuteTime`<sup>Required</sup> <a name="LastExecuteTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime"></a>

```csharp
public string LastExecuteTime { get; }
```

- *Type:* string

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference Monthly { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a>

---

##### `NextExecuteTime`<sup>Required</sup> <a name="NextExecuteTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime"></a>

```csharp
public string NextExecuteTime { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference TimeOfDay { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference Weekly { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleMonthly MonthlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay TimeOfDayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleWeekly WeeklyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRecurringScheduleWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

---


### GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference <a name="GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRolloutDisruptionBudget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


### GoogleOsConfigPatchDeploymentRolloutOutputReference <a name="GoogleOsConfigPatchDeploymentRolloutOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentRolloutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget">PutDisruptionBudget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisruptionBudget` <a name="PutDisruptionBudget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget"></a>

```csharp
private void PutDisruptionBudget(GoogleOsConfigPatchDeploymentRolloutDisruptionBudget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget">DisruptionBudget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput">DisruptionBudgetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisruptionBudget`<sup>Required</sup> <a name="DisruptionBudget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget"></a>

```csharp
public GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference DisruptionBudget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a>

---

##### `DisruptionBudgetInput`<sup>Optional</sup> <a name="DisruptionBudgetInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput"></a>

```csharp
public GoogleOsConfigPatchDeploymentRolloutDisruptionBudget DisruptionBudgetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.internalValue"></a>

```csharp
public GoogleOsConfigPatchDeploymentRollout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

---


### GoogleOsConfigPatchDeploymentTimeoutsOutputReference <a name="GoogleOsConfigPatchDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOsConfigPatchDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



