# `googleMonitoringAlertPolicy` Submodule <a name="`googleMonitoringAlertPolicy` Submodule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringAlertPolicy <a name="GoogleMonitoringAlertPolicy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy google_monitoring_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicy(Construct Scope, string Id, GoogleMonitoringAlertPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig">GoogleMonitoringAlertPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig">GoogleMonitoringAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy">PutAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation">PutDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetAlertStrategy">ResetAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetNotificationChannels">ResetNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlertStrategy` <a name="PutAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy"></a>

```csharp
private void PutAlertStrategy(GoogleMonitoringAlertPolicyAlertStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions.parameter.value"></a>

- *Type:* object

---

##### `PutDocumentation` <a name="PutDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation"></a>

```csharp
private void PutDocumentation(GoogleMonitoringAlertPolicyDocumentation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMonitoringAlertPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

---

##### `ResetAlertStrategy` <a name="ResetAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetAlertStrategy"></a>

```csharp
private void ResetAlertStrategy()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetDocumentation"></a>

```csharp
private void ResetDocumentation()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationChannels` <a name="ResetNotificationChannels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetNotificationChannels"></a>

```csharp
private void ResetNotificationChannels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringAlertPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringAlertPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringAlertPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringAlertPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringAlertPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategy">AlertStrategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference">GoogleMonitoringAlertPolicyAlertStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList">GoogleMonitoringAlertPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.creationRecord">CreationRecord</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList">GoogleMonitoringAlertPolicyCreationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentation">Documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference">GoogleMonitoringAlertPolicyDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference">GoogleMonitoringAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategyInput">AlertStrategyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combinerInput">CombinerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentationInput">DocumentationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannelsInput">NotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combiner">Combiner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannels">NotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlertStrategy`<sup>Required</sup> <a name="AlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategy"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategyOutputReference AlertStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference">GoogleMonitoringAlertPolicyAlertStrategyOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditions"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList">GoogleMonitoringAlertPolicyConditionsList</a>

---

##### `CreationRecord`<sup>Required</sup> <a name="CreationRecord" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.creationRecord"></a>

```csharp
public GoogleMonitoringAlertPolicyCreationRecordList CreationRecord { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList">GoogleMonitoringAlertPolicyCreationRecordList</a>

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentation"></a>

```csharp
public GoogleMonitoringAlertPolicyDocumentationOutputReference Documentation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference">GoogleMonitoringAlertPolicyDocumentationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeouts"></a>

```csharp
public GoogleMonitoringAlertPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference">GoogleMonitoringAlertPolicyTimeoutsOutputReference</a>

---

##### `AlertStrategyInput`<sup>Optional</sup> <a name="AlertStrategyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategyInput"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategy AlertStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---

##### `CombinerInput`<sup>Optional</sup> <a name="CombinerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combinerInput"></a>

```csharp
public string CombinerInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentationInput"></a>

```csharp
public GoogleMonitoringAlertPolicyDocumentation DocumentationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationChannelsInput`<sup>Optional</sup> <a name="NotificationChannelsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannelsInput"></a>

```csharp
public string[] NotificationChannelsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Combiner`<sup>Required</sup> <a name="Combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combiner"></a>

```csharp
public string Combiner { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationChannels`<sup>Required</sup> <a name="NotificationChannels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannels"></a>

```csharp
public string[] NotificationChannels { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringAlertPolicyAlertStrategy <a name="GoogleMonitoringAlertPolicyAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategy {
    string AutoClose = null,
    object NotificationChannelStrategy = null,
    string[] NotificationPrompts = null,
    GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit NotificationRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.autoClose">AutoClose</a></code> | <code>string</code> | If an alert policy that was active has no data for this long, any open incidents will close. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy">NotificationChannelStrategy</a></code> | <code>object</code> | notification_channel_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationPrompts">NotificationPrompts</a></code> | <code>string[]</code> | Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationRateLimit">NotificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | notification_rate_limit block. |

---

##### `AutoClose`<sup>Optional</sup> <a name="AutoClose" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.autoClose"></a>

```csharp
public string AutoClose { get; set; }
```

- *Type:* string

If an alert policy that was active has no data for this long, any open incidents will close.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#auto_close GoogleMonitoringAlertPolicy#auto_close}

---

##### `NotificationChannelStrategy`<sup>Optional</sup> <a name="NotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy"></a>

```csharp
public object NotificationChannelStrategy { get; set; }
```

- *Type:* object

notification_channel_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_channel_strategy GoogleMonitoringAlertPolicy#notification_channel_strategy}

---

##### `NotificationPrompts`<sup>Optional</sup> <a name="NotificationPrompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationPrompts"></a>

```csharp
public string[] NotificationPrompts { get; set; }
```

- *Type:* string[]

Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_prompts GoogleMonitoringAlertPolicy#notification_prompts}

---

##### `NotificationRateLimit`<sup>Optional</sup> <a name="NotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationRateLimit"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit NotificationRateLimit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

notification_rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_rate_limit GoogleMonitoringAlertPolicy#notification_rate_limit}

---

### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy {
    string[] NotificationChannelNames = null,
    string RenotifyInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames">NotificationChannelNames</a></code> | <code>string[]</code> | The notification channels that these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval">RenotifyInterval</a></code> | <code>string</code> | The frequency at which to send reminder notifications for open incidents. |

---

##### `NotificationChannelNames`<sup>Optional</sup> <a name="NotificationChannelNames" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames"></a>

```csharp
public string[] NotificationChannelNames { get; set; }
```

- *Type:* string[]

The notification channels that these settings apply to.

Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_channel_names GoogleMonitoringAlertPolicy#notification_channel_names}

---

##### `RenotifyInterval`<sup>Optional</sup> <a name="RenotifyInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval"></a>

```csharp
public string RenotifyInterval { get; set; }
```

- *Type:* string

The frequency at which to send reminder notifications for open incidents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#renotify_interval GoogleMonitoringAlertPolicy#renotify_interval}

---

### GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit {
    string Period = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period">Period</a></code> | <code>string</code> | Not more than one notification per period. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Not more than one notification per period.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#period GoogleMonitoringAlertPolicy#period}

---

### GoogleMonitoringAlertPolicyConditions <a name="GoogleMonitoringAlertPolicyConditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditions {
    string DisplayName,
    GoogleMonitoringAlertPolicyConditionsConditionAbsent ConditionAbsent = null,
    GoogleMonitoringAlertPolicyConditionsConditionMatchedLog ConditionMatchedLog = null,
    GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage ConditionMonitoringQueryLanguage = null,
    GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage ConditionPrometheusQueryLanguage = null,
    GoogleMonitoringAlertPolicyConditionsConditionSql ConditionSql = null,
    GoogleMonitoringAlertPolicyConditionsConditionThreshold ConditionThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.displayName">DisplayName</a></code> | <code>string</code> | A short name or phrase used to identify the condition in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionAbsent">ConditionAbsent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | condition_absent block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMatchedLog">ConditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | condition_matched_log block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage">ConditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | condition_monitoring_query_language block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage">ConditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | condition_prometheus_query_language block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionSql">ConditionSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | condition_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | condition_threshold block. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A short name or phrase used to identify the condition in dashboards, notifications, and incidents.

To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `ConditionAbsent`<sup>Optional</sup> <a name="ConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionAbsent"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsent ConditionAbsent { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

condition_absent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_absent GoogleMonitoringAlertPolicy#condition_absent}

---

##### `ConditionMatchedLog`<sup>Optional</sup> <a name="ConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMatchedLog"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMatchedLog ConditionMatchedLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

condition_matched_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_matched_log GoogleMonitoringAlertPolicy#condition_matched_log}

---

##### `ConditionMonitoringQueryLanguage`<sup>Optional</sup> <a name="ConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage ConditionMonitoringQueryLanguage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

condition_monitoring_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_monitoring_query_language GoogleMonitoringAlertPolicy#condition_monitoring_query_language}

---

##### `ConditionPrometheusQueryLanguage`<sup>Optional</sup> <a name="ConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage ConditionPrometheusQueryLanguage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

condition_prometheus_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_prometheus_query_language GoogleMonitoringAlertPolicy#condition_prometheus_query_language}

---

##### `ConditionSql`<sup>Optional</sup> <a name="ConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionSql"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSql ConditionSql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

condition_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_sql GoogleMonitoringAlertPolicy#condition_sql}

---

##### `ConditionThreshold`<sup>Optional</sup> <a name="ConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionThreshold"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThreshold ConditionThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

condition_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#condition_threshold GoogleMonitoringAlertPolicy#condition_threshold}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsent <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsent {
    string Duration,
    object Aggregations = null,
    string Filter = null,
    GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.duration">Duration</a></code> | <code>string</code> | The amount of time that a time series must fail to report new data to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.aggregations">Aggregations</a></code> | <code>object</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.filter">Filter</a></code> | <code>string</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | trigger block. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that a time series must fail to report new data to be considered failing.

Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `Aggregations`<sup>Optional</sup> <a name="Aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.aggregations"></a>

```csharp
public object Aggregations { get; set; }
```

- *Type:* object

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.trigger"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations {
    string AlignmentPeriod = null,
    string CrossSeriesReducer = null,
    string[] GroupByFields = null,
    string PerSeriesAligner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `AlignmentPeriod`<sup>Optional</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; set; }
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `CrossSeriesReducer`<sup>Optional</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; set; }
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `PerSeriesAligner`<sup>Optional</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; set; }
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger {
    double Count = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count">Count</a></code> | <code>double</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent">Percent</a></code> | <code>double</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConditionsConditionMatchedLog <a name="GoogleMonitoringAlertPolicyConditionsConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionMatchedLog {
    string Filter,
    System.Collections.Generic.IDictionary<string, string> LabelExtractors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.filter">Filter</a></code> | <code>string</code> | A logs-based filter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors">LabelExtractors</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map from a label key to an extractor expression, which is used to extract the value for this label key. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A logs-based filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `LabelExtractors`<sup>Optional</sup> <a name="LabelExtractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractors { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map from a label key to an extractor expression, which is used to extract the value for this label key.

Each entry in this map is
a specification for how data should be extracted from log entries that
match filter. Each combination of extracted values is treated as
a separate rule for the purposes of triggering notifications.
Label keys and corresponding values can be used in notifications
generated by this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#label_extractors GoogleMonitoringAlertPolicy#label_extractors}

---

### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage {
    string Duration,
    string Query,
    string EvaluationMissingData = null,
    GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration">Duration</a></code> | <code>string</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query">Query</a></code> | <code>string</code> | Monitoring Query Language query that outputs a boolean stream. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | trigger block. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Monitoring Query Language query that outputs a boolean stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `EvaluationMissingData`<sup>Optional</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; set; }
```

- *Type:* string

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger {
    double Count = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count">Count</a></code> | <code>double</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent">Percent</a></code> | <code>double</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage <a name="GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage {
    string Query,
    string AlertRule = null,
    object DisableMetricValidation = null,
    string Duration = null,
    string EvaluationInterval = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string RuleGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query">Query</a></code> | <code>string</code> | The PromQL expression to evaluate. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule">AlertRule</a></code> | <code>string</code> | The alerting rule name of this alert in the corresponding Prometheus configuration file. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation">DisableMetricValidation</a></code> | <code>object</code> | Whether to disable metric existence validation for this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration">Duration</a></code> | <code>string</code> | Alerts are considered firing once their PromQL expression evaluated to be "true" for this long. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval">EvaluationInterval</a></code> | <code>string</code> | How often this rule should be evaluated. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to add to or overwrite in the PromQL query result. Label names must be valid. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup">RuleGroup</a></code> | <code>string</code> | The rule group name of this alert in the corresponding Prometheus configuration file. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The PromQL expression to evaluate.

Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `AlertRule`<sup>Optional</sup> <a name="AlertRule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule"></a>

```csharp
public string AlertRule { get; set; }
```

- *Type:* string

The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.

This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alert_rule GoogleMonitoringAlertPolicy#alert_rule}

---

##### `DisableMetricValidation`<sup>Optional</sup> <a name="DisableMetricValidation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation"></a>

```csharp
public object DisableMetricValidation { get; set; }
```

- *Type:* object

Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet
exist, improving advanced customer workflows such as configuring
alerting policies using Terraform.

Users with the 'monitoring.alertPolicyViewer' role are able to see the
name of the non-existent metric in the alerting policy condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#disable_metric_validation GoogleMonitoringAlertPolicy#disable_metric_validation}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Alerts are considered firing once their PromQL expression evaluated to be "true" for this long.

Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `EvaluationInterval`<sup>Optional</sup> <a name="EvaluationInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval"></a>

```csharp
public string EvaluationInterval { get; set; }
```

- *Type:* string

How often this rule should be evaluated.

Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#evaluation_interval GoogleMonitoringAlertPolicy#evaluation_interval}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to add to or overwrite in the PromQL query result. Label names must be valid.

Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result,
although label names beginning with __ (two "_") are reserved for
internal use. "labels" may be empty. This field is intended to be used
for organizing and identifying the AlertPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#labels GoogleMonitoringAlertPolicy#labels}

---

##### `RuleGroup`<sup>Optional</sup> <a name="RuleGroup" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup"></a>

```csharp
public string RuleGroup { get; set; }
```

- *Type:* string

The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#rule_group GoogleMonitoringAlertPolicy#rule_group}

---

### GoogleMonitoringAlertPolicyConditionsConditionSql <a name="GoogleMonitoringAlertPolicyConditionsConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSql {
    string Query,
    GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest BooleanTest = null,
    GoogleMonitoringAlertPolicyConditionsConditionSqlDaily Daily = null,
    GoogleMonitoringAlertPolicyConditionsConditionSqlHourly Hourly = null,
    GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes Minutes = null,
    GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest RowCountTest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.query">Query</a></code> | <code>string</code> | The Log Analytics SQL query to run, as a string. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.booleanTest">BooleanTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | boolean_test block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.minutes">Minutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | minutes block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.rowCountTest">RowCountTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | row_count_test block. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The Log Analytics SQL query to run, as a string.

The query must
conform to the required shape. Specifically, the query must not try to
filter the input by time.  A filter will automatically be applied
to filter the input so that the query receives all rows received
since the last time the query was run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `BooleanTest`<sup>Optional</sup> <a name="BooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.booleanTest"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest BooleanTest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

boolean_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#boolean_test GoogleMonitoringAlertPolicy#boolean_test}

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.daily"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDaily Daily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#daily GoogleMonitoringAlertPolicy#daily}

---

##### `Hourly`<sup>Optional</sup> <a name="Hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.hourly"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlHourly Hourly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#hourly GoogleMonitoringAlertPolicy#hourly}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.minutes"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes Minutes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

minutes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

##### `RowCountTest`<sup>Optional</sup> <a name="RowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.rowCountTest"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest RowCountTest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

row_count_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#row_count_test GoogleMonitoringAlertPolicy#row_count_test}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest {
    string Column
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column">Column</a></code> | <code>string</code> | The name of the column containing the boolean value. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

The name of the column containing the boolean value.

If the value
in a row is NULL, that row is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#column GoogleMonitoringAlertPolicy#column}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlDaily <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlDaily {
    double Periodicity,
    GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime ExecutionTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity">Periodicity</a></code> | <code>double</code> | The number of days between runs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime">ExecutionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | execution_time block. |

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity"></a>

```csharp
public double Periodicity { get; set; }
```

- *Type:* double

The number of days between runs.

Must be greater than or equal
to 1 day and less than or equal to 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `ExecutionTime`<sup>Optional</sup> <a name="ExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime ExecutionTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

execution_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#execution_time GoogleMonitoringAlertPolicy#execution_time}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours">Hours</a></code> | <code>double</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of a minute. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of a day in 24 hour format.

Must be greater than or equal
to 0 and typically must be less than or equal to 23. An API may
choose to allow the value "24:00:00" for scenarios like business
closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#hours GoogleMonitoringAlertPolicy#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#nanos GoogleMonitoringAlertPolicy#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of a minute.

Must be greater than or equal to 0 and
typically must be less than or equal to 59. An API may allow the
value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#seconds GoogleMonitoringAlertPolicy#seconds}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlHourly <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlHourly {
    double Periodicity,
    double MinuteOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity">Periodicity</a></code> | <code>double</code> | Number of hours between runs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset">MinuteOffset</a></code> | <code>double</code> | The number of minutes after the hour (in UTC) to run the query. |

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity"></a>

```csharp
public double Periodicity { get; set; }
```

- *Type:* double

Number of hours between runs.

The interval must be greater than or
equal to 1 hour and less than or equal to 48 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `MinuteOffset`<sup>Optional</sup> <a name="MinuteOffset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset"></a>

```csharp
public double MinuteOffset { get; set; }
```

- *Type:* double

The number of minutes after the hour (in UTC) to run the query.

Must be greater than or equal to 0 minutes and less than or equal to
59 minutes.  If left unspecified, then an arbitrary offset is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#minute_offset GoogleMonitoringAlertPolicy#minute_offset}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes {
    double Periodicity
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity">Periodicity</a></code> | <code>double</code> | Number of minutes between runs. |

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity"></a>

```csharp
public double Periodicity { get; set; }
```

- *Type:* double

Number of minutes between runs.

The interval must be greater than or
equal to 5 minutes and less than or equal to 1440 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest {
    string Comparison,
    double Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison">Comparison</a></code> | <code>string</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold">Threshold</a></code> | <code>double</code> | Test the boolean value in the indicated column. |

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Test the boolean value in the indicated column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#threshold GoogleMonitoringAlertPolicy#threshold}

---

### GoogleMonitoringAlertPolicyConditionsConditionThreshold <a name="GoogleMonitoringAlertPolicyConditionsConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThreshold {
    string Comparison,
    string Duration,
    object Aggregations = null,
    object DenominatorAggregations = null,
    string DenominatorFilter = null,
    string EvaluationMissingData = null,
    string Filter = null,
    GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions ForecastOptions = null,
    double ThresholdValue = null,
    GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.comparison">Comparison</a></code> | <code>string</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.duration">Duration</a></code> | <code>string</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.aggregations">Aggregations</a></code> | <code>object</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations">DenominatorAggregations</a></code> | <code>object</code> | denominator_aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter">DenominatorFilter</a></code> | <code>string</code> | A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.filter">Filter</a></code> | <code>string</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions">ForecastOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | forecast_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue">ThresholdValue</a></code> | <code>double</code> | A value against which to compare the time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | trigger block. |

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `Aggregations`<sup>Optional</sup> <a name="Aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.aggregations"></a>

```csharp
public object Aggregations { get; set; }
```

- *Type:* object

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

##### `DenominatorAggregations`<sup>Optional</sup> <a name="DenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations"></a>

```csharp
public object DenominatorAggregations { get; set; }
```

- *Type:* object

denominator_aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#denominator_aggregations GoogleMonitoringAlertPolicy#denominator_aggregations}

---

##### `DenominatorFilter`<sup>Optional</sup> <a name="DenominatorFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter"></a>

```csharp
public string DenominatorFilter { get; set; }
```

- *Type:* string

A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold.

If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#denominator_filter GoogleMonitoringAlertPolicy#denominator_filter}

---

##### `EvaluationMissingData`<sup>Optional</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; set; }
```

- *Type:* string

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `ForecastOptions`<sup>Optional</sup> <a name="ForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions ForecastOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

forecast_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#forecast_options GoogleMonitoringAlertPolicy#forecast_options}

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue"></a>

```csharp
public double ThresholdValue { get; set; }
```

- *Type:* double

A value against which to compare the time series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#threshold_value GoogleMonitoringAlertPolicy#threshold_value}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.trigger"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations {
    string AlignmentPeriod = null,
    string CrossSeriesReducer = null,
    string[] GroupByFields = null,
    string PerSeriesAligner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `AlignmentPeriod`<sup>Optional</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; set; }
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `CrossSeriesReducer`<sup>Optional</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; set; }
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `PerSeriesAligner`<sup>Optional</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; set; }
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations {
    string AlignmentPeriod = null,
    string CrossSeriesReducer = null,
    string[] GroupByFields = null,
    string PerSeriesAligner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `AlignmentPeriod`<sup>Optional</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; set; }
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `CrossSeriesReducer`<sup>Optional</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; set; }
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `PerSeriesAligner`<sup>Optional</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; set; }
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions {
    string ForecastHorizon
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon">ForecastHorizon</a></code> | <code>string</code> | The length of time into the future to forecast whether a timeseries will violate the threshold. |

---

##### `ForecastHorizon`<sup>Required</sup> <a name="ForecastHorizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon"></a>

```csharp
public string ForecastHorizon { get; set; }
```

- *Type:* string

The length of time into the future to forecast whether a timeseries will violate the threshold.

If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured 'duration',
then the timeseries is considered to be failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#forecast_horizon GoogleMonitoringAlertPolicy#forecast_horizon}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger {
    double Count = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count">Count</a></code> | <code>double</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent">Percent</a></code> | <code>double</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConfig <a name="GoogleMonitoringAlertPolicyConfig" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Combiner,
    object Conditions,
    string DisplayName,
    GoogleMonitoringAlertPolicyAlertStrategy AlertStrategy = null,
    GoogleMonitoringAlertPolicyDocumentation Documentation = null,
    object Enabled = null,
    string Id = null,
    string[] NotificationChannels = null,
    string Project = null,
    string Severity = null,
    GoogleMonitoringAlertPolicyTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.combiner">Combiner</a></code> | <code>string</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.alertStrategy">AlertStrategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.documentation">Documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.notificationChannels">NotificationChannels</a></code> | <code>string[]</code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.severity">Severity</a></code> | <code>string</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Combiner`<sup>Required</sup> <a name="Combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.combiner"></a>

```csharp
public string Combiner { get; set; }
```

- *Type:* string

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#combiner GoogleMonitoringAlertPolicy#combiner}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#conditions GoogleMonitoringAlertPolicy#conditions}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `AlertStrategy`<sup>Optional</sup> <a name="AlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.alertStrategy"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategy AlertStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#alert_strategy GoogleMonitoringAlertPolicy#alert_strategy}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.documentation"></a>

```csharp
public GoogleMonitoringAlertPolicyDocumentation Documentation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#documentation GoogleMonitoringAlertPolicy#documentation}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#enabled GoogleMonitoringAlertPolicy#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationChannels`<sup>Optional</sup> <a name="NotificationChannels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.notificationChannels"></a>

```csharp
public string[] NotificationChannels { get; set; }
```

- *Type:* string[]

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#notification_channels GoogleMonitoringAlertPolicy#notification_channels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#severity GoogleMonitoringAlertPolicy#severity}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.timeouts"></a>

```csharp
public GoogleMonitoringAlertPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#timeouts GoogleMonitoringAlertPolicy#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#user_labels GoogleMonitoringAlertPolicy#user_labels}

---

### GoogleMonitoringAlertPolicyCreationRecord <a name="GoogleMonitoringAlertPolicyCreationRecord" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyCreationRecord {

};
```


### GoogleMonitoringAlertPolicyDocumentation <a name="GoogleMonitoringAlertPolicyDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyDocumentation {
    string Content = null,
    object Links = null,
    string MimeType = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.content">Content</a></code> | <code>string</code> | The text of the documentation, interpreted according to mimeType. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.links">Links</a></code> | <code>object</code> | links block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.mimeType">MimeType</a></code> | <code>string</code> | The format of the content field. Presently, only the value "text/markdown" is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.subject">Subject</a></code> | <code>string</code> | The subject line of the notification. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The text of the documentation, interpreted according to mimeType.

The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#content GoogleMonitoringAlertPolicy#content}

---

##### `Links`<sup>Optional</sup> <a name="Links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.links"></a>

```csharp
public object Links { get; set; }
```

- *Type:* object

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#links GoogleMonitoringAlertPolicy#links}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

The format of the content field. Presently, only the value "text/markdown" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#mime_type GoogleMonitoringAlertPolicy#mime_type}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

The subject line of the notification.

The subject line may not
exceed 10,240 bytes. In notifications generated by this policy the contents
of the subject line after variable expansion will be truncated to 255 bytes
or shorter at the latest UTF-8 character boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#subject GoogleMonitoringAlertPolicy#subject}

---

### GoogleMonitoringAlertPolicyDocumentationLinks <a name="GoogleMonitoringAlertPolicyDocumentationLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyDocumentationLinks {
    string DisplayName = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.displayName">DisplayName</a></code> | <code>string</code> | A short display name for the link. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.url">Url</a></code> | <code>string</code> | The url of a webpage. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A short display name for the link.

The display name must not be empty or exceed 63 characters. Example: "playbook".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The url of a webpage.

A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#url GoogleMonitoringAlertPolicy#url}

---

### GoogleMonitoringAlertPolicyTimeouts <a name="GoogleMonitoringAlertPolicyTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames">ResetNotificationChannelNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval">ResetRenotifyInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotificationChannelNames` <a name="ResetNotificationChannelNames" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames"></a>

```csharp
private void ResetNotificationChannelNames()
```

##### `ResetRenotifyInterval` <a name="ResetRenotifyInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval"></a>

```csharp
private void ResetRenotifyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput">NotificationChannelNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput">RenotifyIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames">NotificationChannelNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval">RenotifyInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationChannelNamesInput`<sup>Optional</sup> <a name="NotificationChannelNamesInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput"></a>

```csharp
public string[] NotificationChannelNamesInput { get; }
```

- *Type:* string[]

---

##### `RenotifyIntervalInput`<sup>Optional</sup> <a name="RenotifyIntervalInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput"></a>

```csharp
public string RenotifyIntervalInput { get; }
```

- *Type:* string

---

##### `NotificationChannelNames`<sup>Required</sup> <a name="NotificationChannelNames" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames"></a>

```csharp
public string[] NotificationChannelNames { get; }
```

- *Type:* string[]

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval"></a>

```csharp
public string RenotifyInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---


### GoogleMonitoringAlertPolicyAlertStrategyOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyAlertStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy">PutNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit">PutNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose">ResetAutoClose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy">ResetNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts">ResetNotificationPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit">ResetNotificationRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationChannelStrategy` <a name="PutNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy"></a>

```csharp
private void PutNotificationChannelStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy.parameter.value"></a>

- *Type:* object

---

##### `PutNotificationRateLimit` <a name="PutNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit"></a>

```csharp
private void PutNotificationRateLimit(GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `ResetAutoClose` <a name="ResetAutoClose" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose"></a>

```csharp
private void ResetAutoClose()
```

##### `ResetNotificationChannelStrategy` <a name="ResetNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy"></a>

```csharp
private void ResetNotificationChannelStrategy()
```

##### `ResetNotificationPrompts` <a name="ResetNotificationPrompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts"></a>

```csharp
private void ResetNotificationPrompts()
```

##### `ResetNotificationRateLimit` <a name="ResetNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit"></a>

```csharp
private void ResetNotificationRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy">NotificationChannelStrategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit">NotificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput">AutoCloseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput">NotificationChannelStrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput">NotificationPromptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput">NotificationRateLimitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose">AutoClose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts">NotificationPrompts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationChannelStrategy`<sup>Required</sup> <a name="NotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList NotificationChannelStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a>

---

##### `NotificationRateLimit`<sup>Required</sup> <a name="NotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference NotificationRateLimit { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a>

---

##### `AutoCloseInput`<sup>Optional</sup> <a name="AutoCloseInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput"></a>

```csharp
public string AutoCloseInput { get; }
```

- *Type:* string

---

##### `NotificationChannelStrategyInput`<sup>Optional</sup> <a name="NotificationChannelStrategyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput"></a>

```csharp
public object NotificationChannelStrategyInput { get; }
```

- *Type:* object

---

##### `NotificationPromptsInput`<sup>Optional</sup> <a name="NotificationPromptsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput"></a>

```csharp
public string[] NotificationPromptsInput { get; }
```

- *Type:* string[]

---

##### `NotificationRateLimitInput`<sup>Optional</sup> <a name="NotificationRateLimitInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit NotificationRateLimitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `AutoClose`<sup>Required</sup> <a name="AutoClose" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose"></a>

```csharp
public string AutoClose { get; }
```

- *Type:* string

---

##### `NotificationPrompts`<sup>Required</sup> <a name="NotificationPrompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts"></a>

```csharp
public string[] NotificationPrompts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyAlertStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod">ResetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer">ResetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner">ResetPerSeriesAligner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignmentPeriod` <a name="ResetAlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod"></a>

```csharp
private void ResetAlignmentPeriod()
```

##### `ResetCrossSeriesReducer` <a name="ResetCrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer"></a>

```csharp
private void ResetCrossSeriesReducer()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetPerSeriesAligner` <a name="ResetPerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner"></a>

```csharp
private void ResetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput">AlignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput">CrossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput">PerSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentPeriodInput`<sup>Optional</sup> <a name="AlignmentPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput"></a>

```csharp
public string AlignmentPeriodInput { get; }
```

- *Type:* string

---

##### `CrossSeriesReducerInput`<sup>Optional</sup> <a name="CrossSeriesReducerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```csharp
public string CrossSeriesReducerInput { get; }
```

- *Type:* string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `PerSeriesAlignerInput`<sup>Optional</sup> <a name="PerSeriesAlignerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```csharp
public string PerSeriesAlignerInput { get; }
```

- *Type:* string

---

##### `AlignmentPeriod`<sup>Required</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; }
```

- *Type:* string

---

##### `CrossSeriesReducer`<sup>Required</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; }
```

- *Type:* string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `PerSeriesAligner`<sup>Required</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations">PutAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations">ResetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregations` <a name="PutAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations"></a>

```csharp
private void PutAggregations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations.parameter.value"></a>

- *Type:* object

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `ResetAggregations` <a name="ResetAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations"></a>

```csharp
private void ResetAggregations()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations">Aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput">AggregationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregations`<sup>Required</sup> <a name="Aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList Aggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a>

---

##### `AggregationsInput`<sup>Optional</sup> <a name="AggregationsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput"></a>

```csharp
public object AggregationsInput { get; }
```

- *Type:* object

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors">ResetLabelExtractors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelExtractors` <a name="ResetLabelExtractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors"></a>

```csharp
private void ResetLabelExtractors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput">LabelExtractorsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors">LabelExtractors</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `LabelExtractorsInput`<sup>Optional</sup> <a name="LabelExtractorsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractorsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `LabelExtractors`<sup>Required</sup> <a name="LabelExtractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractors { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMatchedLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData">ResetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `ResetEvaluationMissingData` <a name="ResetEvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData"></a>

```csharp
private void ResetEvaluationMissingData()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput">EvaluationMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EvaluationMissingDataInput`<sup>Optional</sup> <a name="EvaluationMissingDataInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput"></a>

```csharp
public string EvaluationMissingDataInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `EvaluationMissingData`<sup>Required</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule">ResetAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation">ResetDisableMetricValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval">ResetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup">ResetRuleGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlertRule` <a name="ResetAlertRule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule"></a>

```csharp
private void ResetAlertRule()
```

##### `ResetDisableMetricValidation` <a name="ResetDisableMetricValidation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation"></a>

```csharp
private void ResetDisableMetricValidation()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetEvaluationInterval` <a name="ResetEvaluationInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval"></a>

```csharp
private void ResetEvaluationInterval()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetRuleGroup` <a name="ResetRuleGroup" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup"></a>

```csharp
private void ResetRuleGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput">AlertRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput">DisableMetricValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput">EvaluationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput">RuleGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule">AlertRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation">DisableMetricValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval">EvaluationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup">RuleGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertRuleInput`<sup>Optional</sup> <a name="AlertRuleInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput"></a>

```csharp
public string AlertRuleInput { get; }
```

- *Type:* string

---

##### `DisableMetricValidationInput`<sup>Optional</sup> <a name="DisableMetricValidationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput"></a>

```csharp
public object DisableMetricValidationInput { get; }
```

- *Type:* object

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EvaluationIntervalInput`<sup>Optional</sup> <a name="EvaluationIntervalInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput"></a>

```csharp
public string EvaluationIntervalInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RuleGroupInput`<sup>Optional</sup> <a name="RuleGroupInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput"></a>

```csharp
public string RuleGroupInput { get; }
```

- *Type:* string

---

##### `AlertRule`<sup>Required</sup> <a name="AlertRule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule"></a>

```csharp
public string AlertRule { get; }
```

- *Type:* string

---

##### `DisableMetricValidation`<sup>Required</sup> <a name="DisableMetricValidation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation"></a>

```csharp
public object DisableMetricValidation { get; }
```

- *Type:* object

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `EvaluationInterval`<sup>Required</sup> <a name="EvaluationInterval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval"></a>

```csharp
public string EvaluationInterval { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RuleGroup`<sup>Required</sup> <a name="RuleGroup" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup"></a>

```csharp
public string RuleGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime">PutExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime">ResetExecutionTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionTime` <a name="PutExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime"></a>

```csharp
private void PutExecutionTime(GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `ResetExecutionTime` <a name="ResetExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime"></a>

```csharp
private void ResetExecutionTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime">ExecutionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput">ExecutionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput">PeriodicityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity">Periodicity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionTime`<sup>Required</sup> <a name="ExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference ExecutionTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a>

---

##### `ExecutionTimeInput`<sup>Optional</sup> <a name="ExecutionTimeInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime ExecutionTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `PeriodicityInput`<sup>Optional</sup> <a name="PeriodicityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput"></a>

```csharp
public double PeriodicityInput { get; }
```

- *Type:* double

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity"></a>

```csharp
public double Periodicity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset">ResetMinuteOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinuteOffset` <a name="ResetMinuteOffset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset"></a>

```csharp
private void ResetMinuteOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput">MinuteOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput">PeriodicityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset">MinuteOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity">Periodicity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinuteOffsetInput`<sup>Optional</sup> <a name="MinuteOffsetInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput"></a>

```csharp
public double MinuteOffsetInput { get; }
```

- *Type:* double

---

##### `PeriodicityInput`<sup>Optional</sup> <a name="PeriodicityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput"></a>

```csharp
public double PeriodicityInput { get; }
```

- *Type:* double

---

##### `MinuteOffset`<sup>Required</sup> <a name="MinuteOffset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset"></a>

```csharp
public double MinuteOffset { get; }
```

- *Type:* double

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity"></a>

```csharp
public double Periodicity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlHourly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput">PeriodicityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity">Periodicity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodicityInput`<sup>Optional</sup> <a name="PeriodicityInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput"></a>

```csharp
public double PeriodicityInput { get; }
```

- *Type:* double

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity"></a>

```csharp
public double Periodicity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest">PutBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly">PutHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes">PutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest">PutRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest">ResetBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly">ResetHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest">ResetRowCountTest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBooleanTest` <a name="PutBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest"></a>

```csharp
private void PutBooleanTest(GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `PutDaily` <a name="PutDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily"></a>

```csharp
private void PutDaily(GoogleMonitoringAlertPolicyConditionsConditionSqlDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `PutHourly` <a name="PutHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly"></a>

```csharp
private void PutHourly(GoogleMonitoringAlertPolicyConditionsConditionSqlHourly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `PutMinutes` <a name="PutMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes"></a>

```csharp
private void PutMinutes(GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `PutRowCountTest` <a name="PutRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest"></a>

```csharp
private void PutRowCountTest(GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `ResetBooleanTest` <a name="ResetBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest"></a>

```csharp
private void ResetBooleanTest()
```

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetHourly` <a name="ResetHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly"></a>

```csharp
private void ResetHourly()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetRowCountTest` <a name="ResetRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest"></a>

```csharp
private void ResetRowCountTest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest">BooleanTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes">Minutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest">RowCountTest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput">BooleanTestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput">DailyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput">HourlyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput">MinutesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput">RowCountTestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanTest`<sup>Required</sup> <a name="BooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference BooleanTest { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a>

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference Daily { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a>

---

##### `Hourly`<sup>Required</sup> <a name="Hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference Hourly { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a>

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference Minutes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a>

---

##### `RowCountTest`<sup>Required</sup> <a name="RowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference RowCountTest { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a>

---

##### `BooleanTestInput`<sup>Optional</sup> <a name="BooleanTestInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest BooleanTestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlDaily DailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `HourlyInput`<sup>Optional</sup> <a name="HourlyInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlHourly HourlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes MinutesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RowCountTestInput`<sup>Optional</sup> <a name="RowCountTestInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest RowCountTestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod">ResetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer">ResetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner">ResetPerSeriesAligner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignmentPeriod` <a name="ResetAlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod"></a>

```csharp
private void ResetAlignmentPeriod()
```

##### `ResetCrossSeriesReducer` <a name="ResetCrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer"></a>

```csharp
private void ResetCrossSeriesReducer()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetPerSeriesAligner` <a name="ResetPerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner"></a>

```csharp
private void ResetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput">AlignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput">CrossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput">PerSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentPeriodInput`<sup>Optional</sup> <a name="AlignmentPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput"></a>

```csharp
public string AlignmentPeriodInput { get; }
```

- *Type:* string

---

##### `CrossSeriesReducerInput`<sup>Optional</sup> <a name="CrossSeriesReducerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```csharp
public string CrossSeriesReducerInput { get; }
```

- *Type:* string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `PerSeriesAlignerInput`<sup>Optional</sup> <a name="PerSeriesAlignerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```csharp
public string PerSeriesAlignerInput { get; }
```

- *Type:* string

---

##### `AlignmentPeriod`<sup>Required</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; }
```

- *Type:* string

---

##### `CrossSeriesReducer`<sup>Required</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; }
```

- *Type:* string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `PerSeriesAligner`<sup>Required</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod">ResetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer">ResetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner">ResetPerSeriesAligner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignmentPeriod` <a name="ResetAlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod"></a>

```csharp
private void ResetAlignmentPeriod()
```

##### `ResetCrossSeriesReducer` <a name="ResetCrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer"></a>

```csharp
private void ResetCrossSeriesReducer()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetPerSeriesAligner` <a name="ResetPerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner"></a>

```csharp
private void ResetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput">AlignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput">CrossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput">PerSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentPeriodInput`<sup>Optional</sup> <a name="AlignmentPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput"></a>

```csharp
public string AlignmentPeriodInput { get; }
```

- *Type:* string

---

##### `CrossSeriesReducerInput`<sup>Optional</sup> <a name="CrossSeriesReducerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```csharp
public string CrossSeriesReducerInput { get; }
```

- *Type:* string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `PerSeriesAlignerInput`<sup>Optional</sup> <a name="PerSeriesAlignerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```csharp
public string PerSeriesAlignerInput { get; }
```

- *Type:* string

---

##### `AlignmentPeriod`<sup>Required</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; }
```

- *Type:* string

---

##### `CrossSeriesReducer`<sup>Required</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; }
```

- *Type:* string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `PerSeriesAligner`<sup>Required</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput">ForecastHorizonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon">ForecastHorizon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForecastHorizonInput`<sup>Optional</sup> <a name="ForecastHorizonInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput"></a>

```csharp
public string ForecastHorizonInput { get; }
```

- *Type:* string

---

##### `ForecastHorizon`<sup>Required</sup> <a name="ForecastHorizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon"></a>

```csharp
public string ForecastHorizon { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations">PutAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations">PutDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions">PutForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations">ResetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations">ResetDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter">ResetDenominatorFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData">ResetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions">ResetForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregations` <a name="PutAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations"></a>

```csharp
private void PutAggregations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations.parameter.value"></a>

- *Type:* object

---

##### `PutDenominatorAggregations` <a name="PutDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations"></a>

```csharp
private void PutDenominatorAggregations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations.parameter.value"></a>

- *Type:* object

---

##### `PutForecastOptions` <a name="PutForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions"></a>

```csharp
private void PutForecastOptions(GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `ResetAggregations` <a name="ResetAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations"></a>

```csharp
private void ResetAggregations()
```

##### `ResetDenominatorAggregations` <a name="ResetDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations"></a>

```csharp
private void ResetDenominatorAggregations()
```

##### `ResetDenominatorFilter` <a name="ResetDenominatorFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter"></a>

```csharp
private void ResetDenominatorFilter()
```

##### `ResetEvaluationMissingData` <a name="ResetEvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData"></a>

```csharp
private void ResetEvaluationMissingData()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetForecastOptions` <a name="ResetForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions"></a>

```csharp
private void ResetForecastOptions()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue"></a>

```csharp
private void ResetThresholdValue()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations">Aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations">DenominatorAggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions">ForecastOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput">AggregationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput">DenominatorAggregationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput">DenominatorFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput">EvaluationMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput">ForecastOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter">DenominatorFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregations`<sup>Required</sup> <a name="Aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList Aggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a>

---

##### `DenominatorAggregations`<sup>Required</sup> <a name="DenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList DenominatorAggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a>

---

##### `ForecastOptions`<sup>Required</sup> <a name="ForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference ForecastOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a>

---

##### `AggregationsInput`<sup>Optional</sup> <a name="AggregationsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput"></a>

```csharp
public object AggregationsInput { get; }
```

- *Type:* object

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `DenominatorAggregationsInput`<sup>Optional</sup> <a name="DenominatorAggregationsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput"></a>

```csharp
public object DenominatorAggregationsInput { get; }
```

- *Type:* object

---

##### `DenominatorFilterInput`<sup>Optional</sup> <a name="DenominatorFilterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput"></a>

```csharp
public string DenominatorFilterInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EvaluationMissingDataInput`<sup>Optional</sup> <a name="EvaluationMissingDataInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput"></a>

```csharp
public string EvaluationMissingDataInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `ForecastOptionsInput`<sup>Optional</sup> <a name="ForecastOptionsInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions ForecastOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput"></a>

```csharp
public double ThresholdValueInput { get; }
```

- *Type:* double

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `DenominatorFilter`<sup>Required</sup> <a name="DenominatorFilter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter"></a>

```csharp
public string DenominatorFilter { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `EvaluationMissingData`<sup>Required</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue"></a>

```csharp
public double ThresholdValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsList <a name="GoogleMonitoringAlertPolicyConditionsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyConditionsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent">PutConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog">PutConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage">PutConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage">PutConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql">PutConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold">PutConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent">ResetConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog">ResetConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage">ResetConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage">ResetConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionSql">ResetConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold">ResetConditionThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionAbsent` <a name="PutConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent"></a>

```csharp
private void PutConditionAbsent(GoogleMonitoringAlertPolicyConditionsConditionAbsent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `PutConditionMatchedLog` <a name="PutConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog"></a>

```csharp
private void PutConditionMatchedLog(GoogleMonitoringAlertPolicyConditionsConditionMatchedLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `PutConditionMonitoringQueryLanguage` <a name="PutConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage"></a>

```csharp
private void PutConditionMonitoringQueryLanguage(GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `PutConditionPrometheusQueryLanguage` <a name="PutConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage"></a>

```csharp
private void PutConditionPrometheusQueryLanguage(GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `PutConditionSql` <a name="PutConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql"></a>

```csharp
private void PutConditionSql(GoogleMonitoringAlertPolicyConditionsConditionSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---

##### `PutConditionThreshold` <a name="PutConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold"></a>

```csharp
private void PutConditionThreshold(GoogleMonitoringAlertPolicyConditionsConditionThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `ResetConditionAbsent` <a name="ResetConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent"></a>

```csharp
private void ResetConditionAbsent()
```

##### `ResetConditionMatchedLog` <a name="ResetConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog"></a>

```csharp
private void ResetConditionMatchedLog()
```

##### `ResetConditionMonitoringQueryLanguage` <a name="ResetConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage"></a>

```csharp
private void ResetConditionMonitoringQueryLanguage()
```

##### `ResetConditionPrometheusQueryLanguage` <a name="ResetConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage"></a>

```csharp
private void ResetConditionPrometheusQueryLanguage()
```

##### `ResetConditionSql` <a name="ResetConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionSql"></a>

```csharp
private void ResetConditionSql()
```

##### `ResetConditionThreshold` <a name="ResetConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold"></a>

```csharp
private void ResetConditionThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent">ConditionAbsent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog">ConditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage">ConditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage">ConditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSql">ConditionSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput">ConditionAbsentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput">ConditionMatchedLogInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput">ConditionMonitoringQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput">ConditionPrometheusQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput">ConditionSqlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput">ConditionThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionAbsent`<sup>Required</sup> <a name="ConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference ConditionAbsent { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference</a>

---

##### `ConditionMatchedLog`<sup>Required</sup> <a name="ConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference ConditionMatchedLog { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a>

---

##### `ConditionMonitoringQueryLanguage`<sup>Required</sup> <a name="ConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference ConditionMonitoringQueryLanguage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a>

---

##### `ConditionPrometheusQueryLanguage`<sup>Required</sup> <a name="ConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference ConditionPrometheusQueryLanguage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a>

---

##### `ConditionSql`<sup>Required</sup> <a name="ConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSql"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference ConditionSql { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference</a>

---

##### `ConditionThreshold`<sup>Required</sup> <a name="ConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference ConditionThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ConditionAbsentInput`<sup>Optional</sup> <a name="ConditionAbsentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionAbsent ConditionAbsentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `ConditionMatchedLogInput`<sup>Optional</sup> <a name="ConditionMatchedLogInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMatchedLog ConditionMatchedLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `ConditionMonitoringQueryLanguageInput`<sup>Optional</sup> <a name="ConditionMonitoringQueryLanguageInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage ConditionMonitoringQueryLanguageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `ConditionPrometheusQueryLanguageInput`<sup>Optional</sup> <a name="ConditionPrometheusQueryLanguageInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage ConditionPrometheusQueryLanguageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `ConditionSqlInput`<sup>Optional</sup> <a name="ConditionSqlInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionSql ConditionSqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---

##### `ConditionThresholdInput`<sup>Optional</sup> <a name="ConditionThresholdInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput"></a>

```csharp
public GoogleMonitoringAlertPolicyConditionsConditionThreshold ConditionThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyCreationRecordList <a name="GoogleMonitoringAlertPolicyCreationRecordList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyCreationRecordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyCreationRecordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleMonitoringAlertPolicyCreationRecordOutputReference <a name="GoogleMonitoringAlertPolicyCreationRecordOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyCreationRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy">MutatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime">MutateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord">GoogleMonitoringAlertPolicyCreationRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MutatedBy`<sup>Required</sup> <a name="MutatedBy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy"></a>

```csharp
public string MutatedBy { get; }
```

- *Type:* string

---

##### `MutateTime`<sup>Required</sup> <a name="MutateTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime"></a>

```csharp
public string MutateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyCreationRecord InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord">GoogleMonitoringAlertPolicyCreationRecord</a>

---


### GoogleMonitoringAlertPolicyDocumentationLinksList <a name="GoogleMonitoringAlertPolicyDocumentationLinksList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyDocumentationLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get"></a>

```csharp
private GoogleMonitoringAlertPolicyDocumentationLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyDocumentationLinksOutputReference <a name="GoogleMonitoringAlertPolicyDocumentationLinksOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyDocumentationLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringAlertPolicyDocumentationOutputReference <a name="GoogleMonitoringAlertPolicyDocumentationOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyDocumentationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetLinks">ResetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks"></a>

```csharp
private void PutLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks.parameter.value"></a>

- *Type:* object

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetLinks` <a name="ResetLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetLinks"></a>

```csharp
private void ResetLinks()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetMimeType"></a>

```csharp
private void ResetMimeType()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList">GoogleMonitoringAlertPolicyDocumentationLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.linksInput">LinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.links"></a>

```csharp
public GoogleMonitoringAlertPolicyDocumentationLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList">GoogleMonitoringAlertPolicyDocumentationLinksList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.linksInput"></a>

```csharp
public object LinksInput { get; }
```

- *Type:* object

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringAlertPolicyDocumentation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---


### GoogleMonitoringAlertPolicyTimeoutsOutputReference <a name="GoogleMonitoringAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringAlertPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



