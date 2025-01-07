# `googleBigqueryAnalyticsHubDataExchange` Submodule <a name="`googleBigqueryAnalyticsHubDataExchange` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchange <a name="GoogleBigqueryAnalyticsHubDataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchange(Construct Scope, string Id, GoogleBigqueryAnalyticsHubDataExchangeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig">PutSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetIcon">ResetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig">ResetSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSharingEnvironmentConfig` <a name="PutSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig"></a>

```csharp
private void PutSharingEnvironmentConfig(GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryAnalyticsHubDataExchangeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDocumentation"></a>

```csharp
private void ResetDocumentation()
```

##### `ResetIcon` <a name="ResetIcon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetIcon"></a>

```csharp
private void ResetIcon()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetPrimaryContact"></a>

```csharp
private void ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSharingEnvironmentConfig` <a name="ResetSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig"></a>

```csharp
private void ResetSharingEnvironmentConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchange.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchange.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchange.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchange.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchange to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubDataExchange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.listingCount">ListingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig">SharingEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentationInput">DocumentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.iconInput">IconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContactInput">PrimaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput">SharingEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentation">Documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.icon">Icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ListingCount`<sup>Required</sup> <a name="ListingCount" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.listingCount"></a>

```csharp
public double ListingCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SharingEnvironmentConfig`<sup>Required</sup> <a name="SharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference SharingEnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput"></a>

```csharp
public string DataExchangeIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentationInput"></a>

```csharp
public string DocumentationInput { get; }
```

- *Type:* string

---

##### `IconInput`<sup>Optional</sup> <a name="IconInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.iconInput"></a>

```csharp
public string IconInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContactInput"></a>

```csharp
public string PrimaryContactInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SharingEnvironmentConfigInput`<sup>Optional</sup> <a name="SharingEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig SharingEnvironmentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentation"></a>

```csharp
public string Documentation { get; }
```

- *Type:* string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.icon"></a>

```csharp
public string Icon { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataExchangeId,
    string DisplayName,
    string Location,
    string Description = null,
    string Documentation = null,
    string Icon = null,
    string Id = null,
    string PrimaryContact = null,
    string Project = null,
    GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig SharingEnvironmentConfig = null,
    GoogleBigqueryAnalyticsHubDataExchangeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.description">Description</a></code> | <code>string</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.documentation">Documentation</a></code> | <code>string</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.icon">Icon</a></code> | <code>string</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#id GoogleBigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#project GoogleBigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig">SharingEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | sharing_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; set; }
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#data_exchange_id GoogleBigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#display_name GoogleBigqueryAnalyticsHubDataExchange#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#location GoogleBigqueryAnalyticsHubDataExchange#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#description GoogleBigqueryAnalyticsHubDataExchange#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.documentation"></a>

```csharp
public string Documentation { get; set; }
```

- *Type:* string

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#documentation GoogleBigqueryAnalyticsHubDataExchange#documentation}

---

##### `Icon`<sup>Optional</sup> <a name="Icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.icon"></a>

```csharp
public string Icon { get; set; }
```

- *Type:* string

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#icon GoogleBigqueryAnalyticsHubDataExchange#icon}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#id GoogleBigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; set; }
```

- *Type:* string

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#primary_contact GoogleBigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#project GoogleBigqueryAnalyticsHubDataExchange#project}.

---

##### `SharingEnvironmentConfig`<sup>Optional</sup> <a name="SharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig SharingEnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

sharing_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#sharing_environment_config GoogleBigqueryAnalyticsHubDataExchange#sharing_environment_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#timeouts GoogleBigqueryAnalyticsHubDataExchange#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig {
    GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig DcrExchangeConfig = null,
    GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig DefaultExchangeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig">DcrExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | dcr_exchange_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig">DefaultExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | default_exchange_config block. |

---

##### `DcrExchangeConfig`<sup>Optional</sup> <a name="DcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig DcrExchangeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

dcr_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#dcr_exchange_config GoogleBigqueryAnalyticsHubDataExchange#dcr_exchange_config}

---

##### `DefaultExchangeConfig`<sup>Optional</sup> <a name="DefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig DefaultExchangeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

default_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#default_exchange_config GoogleBigqueryAnalyticsHubDataExchange#default_exchange_config}

---

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig {

};
```


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig {

};
```


### GoogleBigqueryAnalyticsHubDataExchangeTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#create GoogleBigqueryAnalyticsHubDataExchange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#delete GoogleBigqueryAnalyticsHubDataExchange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#update GoogleBigqueryAnalyticsHubDataExchange#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#create GoogleBigqueryAnalyticsHubDataExchange#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#delete GoogleBigqueryAnalyticsHubDataExchange#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#update GoogleBigqueryAnalyticsHubDataExchange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig">PutDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig">PutDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig">ResetDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig">ResetDefaultExchangeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDcrExchangeConfig` <a name="PutDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig"></a>

```csharp
private void PutDcrExchangeConfig(GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `PutDefaultExchangeConfig` <a name="PutDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig"></a>

```csharp
private void PutDefaultExchangeConfig(GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `ResetDcrExchangeConfig` <a name="ResetDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig"></a>

```csharp
private void ResetDcrExchangeConfig()
```

##### `ResetDefaultExchangeConfig` <a name="ResetDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig"></a>

```csharp
private void ResetDefaultExchangeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig">DcrExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig">DefaultExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput">DcrExchangeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput">DefaultExchangeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DcrExchangeConfig`<sup>Required</sup> <a name="DcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference DcrExchangeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a>

---

##### `DefaultExchangeConfig`<sup>Required</sup> <a name="DefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference DefaultExchangeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a>

---

##### `DcrExchangeConfigInput`<sup>Optional</sup> <a name="DcrExchangeConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig DcrExchangeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `DefaultExchangeConfigInput`<sup>Optional</sup> <a name="DefaultExchangeConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig DefaultExchangeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



