# `googleMonitoringUptimeCheckConfig` Submodule <a name="`googleMonitoringUptimeCheckConfig` Submodule" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringUptimeCheckConfig <a name="GoogleMonitoringUptimeCheckConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config google_monitoring_uptime_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfig(Construct Scope, string Id, GoogleMonitoringUptimeCheckConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig">GoogleMonitoringUptimeCheckConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig">GoogleMonitoringUptimeCheckConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers">PutContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck">PutHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource">PutMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup">PutResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor">PutSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck">PutTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetCheckerType">ResetCheckerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetContentMatchers">ResetContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetHttpCheck">ResetHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetMonitoredResource">ResetMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSelectedRegions">ResetSelectedRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSyntheticMonitor">ResetSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTcpCheck">ResetTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentMatchers` <a name="PutContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers"></a>

```csharp
private void PutContentMatchers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers.parameter.value"></a>

- *Type:* object

---

##### `PutHttpCheck` <a name="PutHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck"></a>

```csharp
private void PutHttpCheck(GoogleMonitoringUptimeCheckConfigHttpCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---

##### `PutMonitoredResource` <a name="PutMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource"></a>

```csharp
private void PutMonitoredResource(GoogleMonitoringUptimeCheckConfigMonitoredResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `PutResourceGroup` <a name="PutResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup"></a>

```csharp
private void PutResourceGroup(GoogleMonitoringUptimeCheckConfigResourceGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---

##### `PutSyntheticMonitor` <a name="PutSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor"></a>

```csharp
private void PutSyntheticMonitor(GoogleMonitoringUptimeCheckConfigSyntheticMonitor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `PutTcpCheck` <a name="PutTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck"></a>

```csharp
private void PutTcpCheck(GoogleMonitoringUptimeCheckConfigTcpCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleMonitoringUptimeCheckConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

---

##### `ResetCheckerType` <a name="ResetCheckerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetCheckerType"></a>

```csharp
private void ResetCheckerType()
```

##### `ResetContentMatchers` <a name="ResetContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetContentMatchers"></a>

```csharp
private void ResetContentMatchers()
```

##### `ResetHttpCheck` <a name="ResetHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetHttpCheck"></a>

```csharp
private void ResetHttpCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonitoredResource` <a name="ResetMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetMonitoredResource"></a>

```csharp
private void ResetMonitoredResource()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetSelectedRegions` <a name="ResetSelectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSelectedRegions"></a>

```csharp
private void ResetSelectedRegions()
```

##### `ResetSyntheticMonitor` <a name="ResetSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSyntheticMonitor"></a>

```csharp
private void ResetSyntheticMonitor()
```

##### `ResetTcpCheck` <a name="ResetTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTcpCheck"></a>

```csharp
private void ResetTcpCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringUptimeCheckConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringUptimeCheckConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringUptimeCheckConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleMonitoringUptimeCheckConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleMonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringUptimeCheckConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringUptimeCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringUptimeCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchers">ContentMatchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList">GoogleMonitoringUptimeCheckConfigContentMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheck">HttpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResource">MonitoredResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference">GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroup">ResourceGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference">GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitor">SyntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheck">TcpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference">GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.uptimeCheckId">UptimeCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerTypeInput">CheckerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchersInput">ContentMatchersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheckInput">HttpCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResourceInput">MonitoredResourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroupInput">ResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegionsInput">SelectedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitorInput">SyntheticMonitorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheckInput">TcpCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerType">CheckerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegions">SelectedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentMatchers`<sup>Required</sup> <a name="ContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchers"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigContentMatchersList ContentMatchers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList">GoogleMonitoringUptimeCheckConfigContentMatchersList</a>

---

##### `HttpCheck`<sup>Required</sup> <a name="HttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheck"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference HttpCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference</a>

---

##### `MonitoredResource`<sup>Required</sup> <a name="MonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResource"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference MonitoredResource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference">GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroup"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference ResourceGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference">GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference</a>

---

##### `SyntheticMonitor`<sup>Required</sup> <a name="SyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitor"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference SyntheticMonitor { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a>

---

##### `TcpCheck`<sup>Required</sup> <a name="TcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheck"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference TcpCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeouts"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference">GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference</a>

---

##### `UptimeCheckId`<sup>Required</sup> <a name="UptimeCheckId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.uptimeCheckId"></a>

```csharp
public string UptimeCheckId { get; }
```

- *Type:* string

---

##### `CheckerTypeInput`<sup>Optional</sup> <a name="CheckerTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerTypeInput"></a>

```csharp
public string CheckerTypeInput { get; }
```

- *Type:* string

---

##### `ContentMatchersInput`<sup>Optional</sup> <a name="ContentMatchersInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchersInput"></a>

```csharp
public object ContentMatchersInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `HttpCheckInput`<sup>Optional</sup> <a name="HttpCheckInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheckInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheck HttpCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonitoredResourceInput`<sup>Optional</sup> <a name="MonitoredResourceInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResourceInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigMonitoredResource MonitoredResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroupInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigResourceGroup ResourceGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---

##### `SelectedRegionsInput`<sup>Optional</sup> <a name="SelectedRegionsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegionsInput"></a>

```csharp
public string[] SelectedRegionsInput { get; }
```

- *Type:* string[]

---

##### `SyntheticMonitorInput`<sup>Optional</sup> <a name="SyntheticMonitorInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitorInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitor SyntheticMonitorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `TcpCheckInput`<sup>Optional</sup> <a name="TcpCheckInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheckInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheck TcpCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CheckerType`<sup>Required</sup> <a name="CheckerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerType"></a>

```csharp
public string CheckerType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SelectedRegions`<sup>Required</sup> <a name="SelectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegions"></a>

```csharp
public string[] SelectedRegions { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringUptimeCheckConfigConfig <a name="GoogleMonitoringUptimeCheckConfigConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Timeout,
    string CheckerType = null,
    object ContentMatchers = null,
    GoogleMonitoringUptimeCheckConfigHttpCheck HttpCheck = null,
    string Id = null,
    GoogleMonitoringUptimeCheckConfigMonitoredResource MonitoredResource = null,
    string Period = null,
    string Project = null,
    GoogleMonitoringUptimeCheckConfigResourceGroup ResourceGroup = null,
    string[] SelectedRegions = null,
    GoogleMonitoringUptimeCheckConfigSyntheticMonitor SyntheticMonitor = null,
    GoogleMonitoringUptimeCheckConfigTcpCheck TcpCheck = null,
    GoogleMonitoringUptimeCheckConfigTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeout">Timeout</a></code> | <code>string</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.checkerType">CheckerType</a></code> | <code>string</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.contentMatchers">ContentMatchers</a></code> | <code>object</code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.httpCheck">HttpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.monitoredResource">MonitoredResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.period">Period</a></code> | <code>string</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.resourceGroup">ResourceGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.selectedRegions">SelectedRegions</a></code> | <code>string[]</code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.syntheticMonitor">SyntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.tcpCheck">TcpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#display_name GoogleMonitoringUptimeCheckConfig#display_name}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

[See the accepted formats](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#timeout GoogleMonitoringUptimeCheckConfig#timeout}

---

##### `CheckerType`<sup>Optional</sup> <a name="CheckerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.checkerType"></a>

```csharp
public string CheckerType { get; set; }
```

- *Type:* string

The checker type to use for the check.

If the monitored resource type is 'servicedirectory_service', 'checker_type' must be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#checker_type GoogleMonitoringUptimeCheckConfig#checker_type}

---

##### `ContentMatchers`<sup>Optional</sup> <a name="ContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.contentMatchers"></a>

```csharp
public object ContentMatchers { get; set; }
```

- *Type:* object

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#content_matchers GoogleMonitoringUptimeCheckConfig#content_matchers}

---

##### `HttpCheck`<sup>Optional</sup> <a name="HttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.httpCheck"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheck HttpCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#http_check GoogleMonitoringUptimeCheckConfig#http_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitoredResource`<sup>Optional</sup> <a name="MonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.monitoredResource"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigMonitoredResource MonitoredResource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#monitored_resource GoogleMonitoringUptimeCheckConfig#monitored_resource}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#period GoogleMonitoringUptimeCheckConfig#period}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.resourceGroup"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigResourceGroup ResourceGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#resource_group GoogleMonitoringUptimeCheckConfig#resource_group}

---

##### `SelectedRegions`<sup>Optional</sup> <a name="SelectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.selectedRegions"></a>

```csharp
public string[] SelectedRegions { get; set; }
```

- *Type:* string[]

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#selected_regions GoogleMonitoringUptimeCheckConfig#selected_regions}

---

##### `SyntheticMonitor`<sup>Optional</sup> <a name="SyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.syntheticMonitor"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitor SyntheticMonitor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#synthetic_monitor GoogleMonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `TcpCheck`<sup>Optional</sup> <a name="TcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.tcpCheck"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheck TcpCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#tcp_check GoogleMonitoringUptimeCheckConfig#tcp_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeouts"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#timeouts GoogleMonitoringUptimeCheckConfig#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#user_labels GoogleMonitoringUptimeCheckConfig#user_labels}

---

### GoogleMonitoringUptimeCheckConfigContentMatchers <a name="GoogleMonitoringUptimeCheckConfigContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigContentMatchers {
    string Content,
    GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher JsonPathMatcher = null,
    string Matcher = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.content">Content</a></code> | <code>string</code> | String or regex content to match (max 1024 bytes). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher">JsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | json_path_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.matcher">Matcher</a></code> | <code>string</code> | The type of content matcher that will be applied to the server output, compared to the content string when the check is run. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

String or regex content to match (max 1024 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#content GoogleMonitoringUptimeCheckConfig#content}

---

##### `JsonPathMatcher`<sup>Optional</sup> <a name="JsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher JsonPathMatcher { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

json_path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#json_path_matcher GoogleMonitoringUptimeCheckConfig#json_path_matcher}

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.matcher"></a>

```csharp
public string Matcher { get; set; }
```

- *Type:* string

The type of content matcher that will be applied to the server output, compared to the content string when the check is run.

Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX", "MATCHES_JSON_PATH", "NOT_MATCHES_JSON_PATH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#matcher GoogleMonitoringUptimeCheckConfig#matcher}

---

### GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher <a name="GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher {
    string JsonPath,
    string JsonMatcher = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath">JsonPath</a></code> | <code>string</code> | JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher">JsonMatcher</a></code> | <code>string</code> | Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"]. |

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath"></a>

```csharp
public string JsonPath { get; set; }
```

- *Type:* string

JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#json_path GoogleMonitoringUptimeCheckConfig#json_path}

---

##### `JsonMatcher`<sup>Optional</sup> <a name="JsonMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher"></a>

```csharp
public string JsonMatcher { get; set; }
```

- *Type:* string

Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#json_matcher GoogleMonitoringUptimeCheckConfig#json_matcher}

---

### GoogleMonitoringUptimeCheckConfigHttpCheck <a name="GoogleMonitoringUptimeCheckConfigHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheck {
    object AcceptedResponseStatusCodes = null,
    GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo AuthInfo = null,
    string Body = null,
    string ContentType = null,
    string CustomContentType = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    object MaskHeaders = null,
    string Path = null,
    GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig PingConfig = null,
    double Port = null,
    string RequestMethod = null,
    GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication ServiceAgentAuthentication = null,
    object UseSsl = null,
    object ValidateSsl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes">AcceptedResponseStatusCodes</a></code> | <code>object</code> | accepted_response_status_codes block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.authInfo">AuthInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | auth_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.body">Body</a></code> | <code>string</code> | The request body associated with the HTTP POST request. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.contentType">ContentType</a></code> | <code>string</code> | The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.customContentType">CustomContentType</a></code> | <code>string</code> | A user provided content type header to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The list of headers to send as part of the uptime check request. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.maskHeaders">MaskHeaders</a></code> | <code>object</code> | Boolean specifying whether to encrypt the header information. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.path">Path</a></code> | <code>string</code> | The path to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | ping_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.port">Port</a></code> | <code>double</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.requestMethod">RequestMethod</a></code> | <code>string</code> | The HTTP request method to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication">ServiceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | service_agent_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.useSsl">UseSsl</a></code> | <code>object</code> | If true, use HTTPS instead of HTTP to run the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.validateSsl">ValidateSsl</a></code> | <code>object</code> | Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. |

---

##### `AcceptedResponseStatusCodes`<sup>Optional</sup> <a name="AcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes"></a>

```csharp
public object AcceptedResponseStatusCodes { get; set; }
```

- *Type:* object

accepted_response_status_codes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#accepted_response_status_codes GoogleMonitoringUptimeCheckConfig#accepted_response_status_codes}

---

##### `AuthInfo`<sup>Optional</sup> <a name="AuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.authInfo"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo AuthInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

auth_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#auth_info GoogleMonitoringUptimeCheckConfig#auth_info}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The request body associated with the HTTP POST request.

If 'content_type' is 'URL_ENCODED', the body passed in must be URL-encoded. Users can provide a 'Content-Length' header via the 'headers' field or the API will do so. If the 'request_method' is 'GET' and 'body' is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. 'foo=bar' in URL-encoded form is 'foo%3Dbar' and in base64 encoding is 'Zm9vJTI1M0RiYXI='.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#body GoogleMonitoringUptimeCheckConfig#body}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#content_type GoogleMonitoringUptimeCheckConfig#content_type}

---

##### `CustomContentType`<sup>Optional</sup> <a name="CustomContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.customContentType"></a>

```csharp
public string CustomContentType { get; set; }
```

- *Type:* string

A user provided content type header to use for the check.

The invalid configurations outlined in the 'content_type' field apply to custom_content_type', as well as the following 1. 'content_type' is 'URL_ENCODED' and 'custom_content_type' is set. 2. 'content_type' is 'USER_PROVIDED' and 'custom_content_type' is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#custom_content_type GoogleMonitoringUptimeCheckConfig#custom_content_type}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The list of headers to send as part of the uptime check request.

If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described in [RFC 2616 (page 31)](https://www.w3.org/Protocols/rfc2616/rfc2616.txt). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#headers GoogleMonitoringUptimeCheckConfig#headers}

---

##### `MaskHeaders`<sup>Optional</sup> <a name="MaskHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.maskHeaders"></a>

```csharp
public object MaskHeaders { get; set; }
```

- *Type:* object

Boolean specifying whether to encrypt the header information.

Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if 'mask_headers' is set to 'true' then the headers will be obscured with '******'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#mask_headers GoogleMonitoringUptimeCheckConfig#mask_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the page to run the check against.

Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with '/', a '/' will be prepended automatically. Optional (defaults to '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#path GoogleMonitoringUptimeCheckConfig#path}

---

##### `PingConfig`<sup>Optional</sup> <a name="PingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.pingConfig"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig PingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#ping_config GoogleMonitoringUptimeCheckConfig#ping_config}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port to the page to run the check against.

Will be combined with 'host' (specified within the ['monitored_resource'](#nested_monitored_resource)) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

##### `RequestMethod`<sup>Optional</sup> <a name="RequestMethod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.requestMethod"></a>

```csharp
public string RequestMethod { get; set; }
```

- *Type:* string

The HTTP request method to use for the check.

If set to 'METHOD_UNSPECIFIED' then 'request_method' defaults to 'GET'. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#request_method GoogleMonitoringUptimeCheckConfig#request_method}

---

##### `ServiceAgentAuthentication`<sup>Optional</sup> <a name="ServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication ServiceAgentAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

service_agent_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#service_agent_authentication GoogleMonitoringUptimeCheckConfig#service_agent_authentication}

---

##### `UseSsl`<sup>Optional</sup> <a name="UseSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.useSsl"></a>

```csharp
public object UseSsl { get; set; }
```

- *Type:* object

If true, use HTTPS instead of HTTP to run the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#use_ssl GoogleMonitoringUptimeCheckConfig#use_ssl}

---

##### `ValidateSsl`<sup>Optional</sup> <a name="ValidateSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.validateSsl"></a>

```csharp
public object ValidateSsl { get; set; }
```

- *Type:* object

Boolean specifying whether to include SSL certificate validation as a part of the Uptime check.

Only applies to checks where 'monitored_resource' is set to 'uptime_url'. If 'use_ssl' is 'false', setting 'validate_ssl' to 'true' has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#validate_ssl GoogleMonitoringUptimeCheckConfig#validate_ssl}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes {
    string StatusClass = null,
    double StatusValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass">StatusClass</a></code> | <code>string</code> | A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue">StatusValue</a></code> | <code>double</code> | A status code to accept. |

---

##### `StatusClass`<sup>Optional</sup> <a name="StatusClass" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass"></a>

```csharp
public string StatusClass { get; set; }
```

- *Type:* string

A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#status_class GoogleMonitoringUptimeCheckConfig#status_class}

---

##### `StatusValue`<sup>Optional</sup> <a name="StatusValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue"></a>

```csharp
public double StatusValue { get; set; }
```

- *Type:* double

A status code to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#status_value GoogleMonitoringUptimeCheckConfig#status_value}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password">Password</a></code> | <code>string</code> | The password to authenticate. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username">Username</a></code> | <code>string</code> | The username to authenticate. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#password GoogleMonitoringUptimeCheckConfig#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#username GoogleMonitoringUptimeCheckConfig#username}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig <a name="GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig {
    double PingsCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount">PingsCount</a></code> | <code>double</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount"></a>

```csharp
public double PingsCount { get; set; }
```

- *Type:* double

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#pings_count GoogleMonitoringUptimeCheckConfig#pings_count}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication <a name="GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type">Type</a></code> | <code>string</code> | The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"]. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#type GoogleMonitoringUptimeCheckConfig#type}

---

### GoogleMonitoringUptimeCheckConfigMonitoredResource <a name="GoogleMonitoringUptimeCheckConfigMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigMonitoredResource {
    System.Collections.Generic.IDictionary<string, string> Labels,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Values for all of the labels listed in the associated monitored resource descriptor. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.type">Type</a></code> | <code>string</code> | The monitored resource type. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Values for all of the labels listed in the associated monitored resource descriptor.

For example, Compute Engine VM instances use the labels 'project_id', 'instance_id', and 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#labels GoogleMonitoringUptimeCheckConfig#labels}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The monitored resource type.

This field must match the type field of a ['MonitoredResourceDescriptor'](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is 'gce_instance'. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#type GoogleMonitoringUptimeCheckConfig#type}

---

### GoogleMonitoringUptimeCheckConfigResourceGroup <a name="GoogleMonitoringUptimeCheckConfigResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigResourceGroup {
    string GroupId = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.groupId">GroupId</a></code> | <code>string</code> | The group of resources being monitored. Should be the 'name' of a group. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

The group of resources being monitored. Should be the 'name' of a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#group_id GoogleMonitoringUptimeCheckConfig#group_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#resource_type GoogleMonitoringUptimeCheckConfig#resource_type}

---

### GoogleMonitoringUptimeCheckConfigSyntheticMonitor <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigSyntheticMonitor {
    GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 CloudFunctionV2
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2">CloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | cloud_function_v2 block. |

---

##### `CloudFunctionV2`<sup>Required</sup> <a name="CloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 CloudFunctionV2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

cloud_function_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#cloud_function_v2 GoogleMonitoringUptimeCheckConfig#cloud_function_v2}

---

### GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name">Name</a></code> | <code>string</code> | The fully qualified name of the cloud function resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The fully qualified name of the cloud function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#name GoogleMonitoringUptimeCheckConfig#name}

---

### GoogleMonitoringUptimeCheckConfigTcpCheck <a name="GoogleMonitoringUptimeCheckConfigTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigTcpCheck {
    double Port,
    GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig PingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.port">Port</a></code> | <code>double</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | ping_config block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port to the page to run the check against.

Will be combined with host (specified within the 'monitored_resource') to construct the full URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

##### `PingConfig`<sup>Optional</sup> <a name="PingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.pingConfig"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig PingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#ping_config GoogleMonitoringUptimeCheckConfig#ping_config}

---

### GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig <a name="GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig {
    double PingsCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount">PingsCount</a></code> | <code>double</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount"></a>

```csharp
public double PingsCount { get; set; }
```

- *Type:* double

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#pings_count GoogleMonitoringUptimeCheckConfig#pings_count}

---

### GoogleMonitoringUptimeCheckConfigTimeouts <a name="GoogleMonitoringUptimeCheckConfigTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference <a name="GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher">ResetJsonMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonMatcher` <a name="ResetJsonMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher"></a>

```csharp
private void ResetJsonMatcher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput">JsonMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher">JsonMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath">JsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonMatcherInput`<sup>Optional</sup> <a name="JsonMatcherInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput"></a>

```csharp
public string JsonMatcherInput { get; }
```

- *Type:* string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput"></a>

```csharp
public string JsonPathInput { get; }
```

- *Type:* string

---

##### `JsonMatcher`<sup>Required</sup> <a name="JsonMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher"></a>

```csharp
public string JsonMatcher { get; }
```

- *Type:* string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath"></a>

```csharp
public string JsonPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---


### GoogleMonitoringUptimeCheckConfigContentMatchersList <a name="GoogleMonitoringUptimeCheckConfigContentMatchersList" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigContentMatchersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get"></a>

```csharp
private GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference <a name="GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher">PutJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher">ResetJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonPathMatcher` <a name="PutJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher"></a>

```csharp
private void PutJsonPathMatcher(GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `ResetJsonPathMatcher` <a name="ResetJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher"></a>

```csharp
private void ResetJsonPathMatcher()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher"></a>

```csharp
private void ResetMatcher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher">JsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput">JsonPathMatcherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput">MatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher">Matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonPathMatcher`<sup>Required</sup> <a name="JsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference JsonPathMatcher { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `JsonPathMatcherInput`<sup>Optional</sup> <a name="JsonPathMatcherInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher JsonPathMatcherInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput"></a>

```csharp
public string MatcherInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher"></a>

```csharp
public string Matcher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get"></a>

```csharp
private GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass">ResetStatusClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue">ResetStatusValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatusClass` <a name="ResetStatusClass" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass"></a>

```csharp
private void ResetStatusClass()
```

##### `ResetStatusValue` <a name="ResetStatusValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue"></a>

```csharp
private void ResetStatusValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput">StatusClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput">StatusValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass">StatusClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue">StatusValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusClassInput`<sup>Optional</sup> <a name="StatusClassInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput"></a>

```csharp
public string StatusClassInput { get; }
```

- *Type:* string

---

##### `StatusValueInput`<sup>Optional</sup> <a name="StatusValueInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput"></a>

```csharp
public double StatusValueInput { get; }
```

- *Type:* double

---

##### `StatusClass`<sup>Required</sup> <a name="StatusClass" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass"></a>

```csharp
public string StatusClass { get; }
```

- *Type:* string

---

##### `StatusValue`<sup>Required</sup> <a name="StatusValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue"></a>

```csharp
public double StatusValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes">PutAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo">PutAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig">PutPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication">PutServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes">ResetAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo">ResetAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType">ResetCustomContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders">ResetMaskHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig">ResetPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod">ResetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication">ResetServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl">ResetUseSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl">ResetValidateSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceptedResponseStatusCodes` <a name="PutAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes"></a>

```csharp
private void PutAcceptedResponseStatusCodes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes.parameter.value"></a>

- *Type:* object

---

##### `PutAuthInfo` <a name="PutAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo"></a>

```csharp
private void PutAuthInfo(GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `PutPingConfig` <a name="PutPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig"></a>

```csharp
private void PutPingConfig(GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `PutServiceAgentAuthentication` <a name="PutServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication"></a>

```csharp
private void PutServiceAgentAuthentication(GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `ResetAcceptedResponseStatusCodes` <a name="ResetAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes"></a>

```csharp
private void ResetAcceptedResponseStatusCodes()
```

##### `ResetAuthInfo` <a name="ResetAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo"></a>

```csharp
private void ResetAuthInfo()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCustomContentType` <a name="ResetCustomContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType"></a>

```csharp
private void ResetCustomContentType()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetMaskHeaders` <a name="ResetMaskHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders"></a>

```csharp
private void ResetMaskHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPingConfig` <a name="ResetPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig"></a>

```csharp
private void ResetPingConfig()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRequestMethod` <a name="ResetRequestMethod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod"></a>

```csharp
private void ResetRequestMethod()
```

##### `ResetServiceAgentAuthentication` <a name="ResetServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication"></a>

```csharp
private void ResetServiceAgentAuthentication()
```

##### `ResetUseSsl` <a name="ResetUseSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl"></a>

```csharp
private void ResetUseSsl()
```

##### `ResetValidateSsl` <a name="ResetValidateSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl"></a>

```csharp
private void ResetValidateSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes">AcceptedResponseStatusCodes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo">AuthInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication">ServiceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput">AcceptedResponseStatusCodesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput">AuthInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput">CustomContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput">MaskHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput">PingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput">RequestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput">ServiceAgentAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput">UseSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput">ValidateSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType">CustomContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders">MaskHeaders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod">RequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl">UseSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl">ValidateSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptedResponseStatusCodes`<sup>Required</sup> <a name="AcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList AcceptedResponseStatusCodes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a>

---

##### `AuthInfo`<sup>Required</sup> <a name="AuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference AuthInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a>

---

##### `PingConfig`<sup>Required</sup> <a name="PingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference PingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a>

---

##### `ServiceAgentAuthentication`<sup>Required</sup> <a name="ServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference ServiceAgentAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a>

---

##### `AcceptedResponseStatusCodesInput`<sup>Optional</sup> <a name="AcceptedResponseStatusCodesInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput"></a>

```csharp
public object AcceptedResponseStatusCodesInput { get; }
```

- *Type:* object

---

##### `AuthInfoInput`<sup>Optional</sup> <a name="AuthInfoInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo AuthInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CustomContentTypeInput`<sup>Optional</sup> <a name="CustomContentTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput"></a>

```csharp
public string CustomContentTypeInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaskHeadersInput`<sup>Optional</sup> <a name="MaskHeadersInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput"></a>

```csharp
public object MaskHeadersInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PingConfigInput`<sup>Optional</sup> <a name="PingConfigInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig PingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput"></a>

```csharp
public string RequestMethodInput { get; }
```

- *Type:* string

---

##### `ServiceAgentAuthenticationInput`<sup>Optional</sup> <a name="ServiceAgentAuthenticationInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication ServiceAgentAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `UseSslInput`<sup>Optional</sup> <a name="UseSslInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput"></a>

```csharp
public object UseSslInput { get; }
```

- *Type:* object

---

##### `ValidateSslInput`<sup>Optional</sup> <a name="ValidateSslInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput"></a>

```csharp
public object ValidateSslInput { get; }
```

- *Type:* object

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CustomContentType`<sup>Required</sup> <a name="CustomContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType"></a>

```csharp
public string CustomContentType { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaskHeaders`<sup>Required</sup> <a name="MaskHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders"></a>

```csharp
public object MaskHeaders { get; }
```

- *Type:* object

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod"></a>

```csharp
public string RequestMethod { get; }
```

- *Type:* string

---

##### `UseSsl`<sup>Required</sup> <a name="UseSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl"></a>

```csharp
public object UseSsl { get; }
```

- *Type:* object

---

##### `ValidateSsl`<sup>Required</sup> <a name="ValidateSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl"></a>

```csharp
public object ValidateSsl { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput">PingsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount">PingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PingsCountInput`<sup>Optional</sup> <a name="PingsCountInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```csharp
public double PingsCountInput { get; }
```

- *Type:* double

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount"></a>

```csharp
public double PingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---


### GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference <a name="GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigMonitoredResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---


### GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference <a name="GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigResourceGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---


### GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


### GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2">PutCloudFunctionV2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudFunctionV2` <a name="PutCloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2"></a>

```csharp
private void PutCloudFunctionV2(GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2">CloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input">CloudFunctionV2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudFunctionV2`<sup>Required</sup> <a name="CloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference CloudFunctionV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a>

---

##### `CloudFunctionV2Input`<sup>Optional</sup> <a name="CloudFunctionV2Input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 CloudFunctionV2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigSyntheticMonitor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---


### GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference <a name="GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig">PutPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig">ResetPingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPingConfig` <a name="PutPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig"></a>

```csharp
private void PutPingConfig(GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `ResetPingConfig` <a name="ResetPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig"></a>

```csharp
private void ResetPingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig">PingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput">PingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PingConfig`<sup>Required</sup> <a name="PingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference PingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a>

---

##### `PingConfigInput`<sup>Optional</sup> <a name="PingConfigInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig PingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---


### GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference <a name="GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput">PingsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount">PingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PingsCountInput`<sup>Optional</sup> <a name="PingsCountInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```csharp
public double PingsCountInput { get; }
```

- *Type:* double

---

##### `PingsCount`<sup>Required</sup> <a name="PingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount"></a>

```csharp
public double PingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---


### GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference <a name="GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



