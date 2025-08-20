# `googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscription <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription google_bigquery_analytics_hub_data_exchange_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscription(Construct Scope, string Id, GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset">PutDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset">ResetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy">ResetRefreshPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact">ResetSubscriberContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationDataset` <a name="PutDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset"></a>

```csharp
private void PutDestinationDataset(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---

##### `ResetDestinationDataset` <a name="ResetDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset"></a>

```csharp
private void ResetDestinationDataset()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRefreshPolicy` <a name="ResetRefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy"></a>

```csharp
private void ResetRefreshPolicy()
```

##### `ResetSubscriberContact` <a name="ResetSubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact"></a>

```csharp
private void ResetSubscriberContact()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubDataExchangeSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange">DataExchange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime">LastModifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap">LinkedDatasetMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources">LinkedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail">LogLinkedDatasetQueryUserEmail</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName">OrganizationDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput">DataExchangeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput">DataExchangeProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput">DestinationDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput">RefreshPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput">SubscriberContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation">DataExchangeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject">DataExchangeProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy">RefreshPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact">SubscriberContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DataExchange`<sup>Required</sup> <a name="DataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange"></a>

```csharp
public string DataExchange { get; }
```

- *Type:* string

---

##### `DestinationDataset`<sup>Required</sup> <a name="DestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference DestinationDataset { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a>

---

##### `LastModifyTime`<sup>Required</sup> <a name="LastModifyTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime"></a>

```csharp
public string LastModifyTime { get; }
```

- *Type:* string

---

##### `LinkedDatasetMap`<sup>Required</sup> <a name="LinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList LinkedDatasetMap { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a>

---

##### `LinkedResources`<sup>Required</sup> <a name="LinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList LinkedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a>

---

##### `LogLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="LogLinkedDatasetQueryUserEmail" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```csharp
public IResolvable LogLinkedDatasetQueryUserEmail { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationDisplayName`<sup>Required</sup> <a name="OrganizationDisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName"></a>

```csharp
public string OrganizationDisplayName { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput"></a>

```csharp
public string DataExchangeIdInput { get; }
```

- *Type:* string

---

##### `DataExchangeLocationInput`<sup>Optional</sup> <a name="DataExchangeLocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput"></a>

```csharp
public string DataExchangeLocationInput { get; }
```

- *Type:* string

---

##### `DataExchangeProjectInput`<sup>Optional</sup> <a name="DataExchangeProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput"></a>

```csharp
public string DataExchangeProjectInput { get; }
```

- *Type:* string

---

##### `DestinationDatasetInput`<sup>Optional</sup> <a name="DestinationDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset DestinationDatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RefreshPolicyInput`<sup>Optional</sup> <a name="RefreshPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput"></a>

```csharp
public string RefreshPolicyInput { get; }
```

- *Type:* string

---

##### `SubscriberContactInput`<sup>Optional</sup> <a name="SubscriberContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput"></a>

```csharp
public string SubscriberContactInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; }
```

- *Type:* string

---

##### `DataExchangeLocation`<sup>Required</sup> <a name="DataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation"></a>

```csharp
public string DataExchangeLocation { get; }
```

- *Type:* string

---

##### `DataExchangeProject`<sup>Required</sup> <a name="DataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject"></a>

```csharp
public string DataExchangeProject { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RefreshPolicy`<sup>Required</sup> <a name="RefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy"></a>

```csharp
public string RefreshPolicy { get; }
```

- *Type:* string

---

##### `SubscriberContact`<sup>Required</sup> <a name="SubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact"></a>

```csharp
public string SubscriberContact { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataExchangeId,
    string DataExchangeLocation,
    string DataExchangeProject,
    string Location,
    string SubscriptionId,
    GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset DestinationDataset = null,
    string Id = null,
    string Project = null,
    string RefreshPolicy = null,
    string SubscriberContact = null,
    GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation">DataExchangeLocation</a></code> | <code>string</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject">DataExchangeProject</a></code> | <code>string</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy">RefreshPolicy</a></code> | <code>string</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact">SubscriberContact</a></code> | <code>string</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; set; }
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `DataExchangeLocation`<sup>Required</sup> <a name="DataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation"></a>

```csharp
public string DataExchangeLocation { get; set; }
```

- *Type:* string

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `DataExchangeProject`<sup>Required</sup> <a name="DataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject"></a>

```csharp
public string DataExchangeProject { get; set; }
```

- *Type:* string

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `DestinationDataset`<sup>Optional</sup> <a name="DestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset DestinationDataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `RefreshPolicy`<sup>Optional</sup> <a name="RefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy"></a>

```csharp
public string RefreshPolicy { get; set; }
```

- *Type:* string

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `SubscriberContact`<sup>Optional</sup> <a name="SubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact"></a>

```csharp
public string SubscriberContact { get; set; }
```

- *Type:* string

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset {
    GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference DatasetReference,
    string Location,
    string Description = null,
    string FriendlyName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location">Location</a></code> | <code>string</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description">Description</a></code> | <code>string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName">FriendlyName</a></code> | <code>string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this dataset. You can use these to organize and group your datasets. |

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference DatasetReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_reference GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_reference}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#description GoogleBigqueryAnalyticsHubDataExchangeSubscription#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#friendly_name GoogleBigqueryAnalyticsHubDataExchangeSubscription#friendly_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#labels GoogleBigqueryAnalyticsHubDataExchangeSubscription#labels}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference {
    string DatasetId,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId">DatasetId</a></code> | <code>string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this dataset. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#project_id}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap {

};
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources {

};
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference">PutDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetReference` <a name="PutDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```csharp
private void PutDatasetReference(GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">DatasetReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference DatasetReference { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `DatasetReferenceInput`<sup>Optional</sup> <a name="DatasetReferenceInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference DatasetReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get"></a>

```csharp
private GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">LinkedPubsubSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing">Listing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```csharp
public string LinkedDataset { get; }
```

- *Type:* string

---

##### `LinkedPubsubSubscription`<sup>Required</sup> <a name="LinkedPubsubSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```csharp
public string LinkedPubsubSubscription { get; }
```

- *Type:* string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```csharp
public string Listing { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get"></a>

```csharp
private GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing">Listing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```csharp
public string LinkedDataset { get; }
```

- *Type:* string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```csharp
public string Listing { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



