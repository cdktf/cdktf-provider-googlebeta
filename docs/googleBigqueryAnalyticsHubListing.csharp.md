# `googleBigqueryAnalyticsHubListing` Submodule <a name="`googleBigqueryAnalyticsHubListing` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubListing <a name="GoogleBigqueryAnalyticsHubListing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListing(Construct Scope, string Id, GoogleBigqueryAnalyticsHubListingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig">GoogleBigqueryAnalyticsHubListingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig">GoogleBigqueryAnalyticsHubListingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putBigqueryDataset">PutBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putDataProvider">PutDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putPublisher">PutPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putRestrictedExportConfig">PutRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetDataProvider">ResetDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetIcon">ResetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetRequestAccess">ResetRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetRestrictedExportConfig">ResetRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryDataset` <a name="PutBigqueryDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putBigqueryDataset"></a>

```csharp
private void PutBigqueryDataset(GoogleBigqueryAnalyticsHubListingBigqueryDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putBigqueryDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `PutDataProvider` <a name="PutDataProvider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putDataProvider"></a>

```csharp
private void PutDataProvider(GoogleBigqueryAnalyticsHubListingDataProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putDataProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a>

---

##### `PutPublisher` <a name="PutPublisher" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putPublisher"></a>

```csharp
private void PutPublisher(GoogleBigqueryAnalyticsHubListingPublisher Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putPublisher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a>

---

##### `PutRestrictedExportConfig` <a name="PutRestrictedExportConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putRestrictedExportConfig"></a>

```csharp
private void PutRestrictedExportConfig(GoogleBigqueryAnalyticsHubListingRestrictedExportConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putRestrictedExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryAnalyticsHubListingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts">GoogleBigqueryAnalyticsHubListingTimeouts</a>

---

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetDataProvider` <a name="ResetDataProvider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetDataProvider"></a>

```csharp
private void ResetDataProvider()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetDocumentation"></a>

```csharp
private void ResetDocumentation()
```

##### `ResetIcon` <a name="ResetIcon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetIcon"></a>

```csharp
private void ResetIcon()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetPrimaryContact"></a>

```csharp
private void ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetPublisher"></a>

```csharp
private void ResetPublisher()
```

##### `ResetRequestAccess` <a name="ResetRequestAccess" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetRequestAccess"></a>

```csharp
private void ResetRequestAccess()
```

##### `ResetRestrictedExportConfig` <a name="ResetRestrictedExportConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetRestrictedExportConfig"></a>

```csharp
private void ResetRestrictedExportConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListing.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListing.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListing.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListing.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubListing to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubListing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubListing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.bigqueryDataset">BigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference">GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataProvider">DataProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference">GoogleBigqueryAnalyticsHubListingDataProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.publisher">Publisher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference">GoogleBigqueryAnalyticsHubListingPublisherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.restrictedExportConfig">RestrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference">GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.bigqueryDatasetInput">BigqueryDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataProviderInput">DataProviderInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.documentationInput">DocumentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.iconInput">IconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.primaryContactInput">PrimaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.publisherInput">PublisherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.requestAccessInput">RequestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.restrictedExportConfigInput">RestrictedExportConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.documentation">Documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.icon">Icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.requestAccess">RequestAccess</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryDataset`<sup>Required</sup> <a name="BigqueryDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.bigqueryDataset"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference BigqueryDataset { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference">GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a>

---

##### `DataProvider`<sup>Required</sup> <a name="DataProvider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataProvider"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingDataProviderOutputReference DataProvider { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference">GoogleBigqueryAnalyticsHubListingDataProviderOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.publisher"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingPublisherOutputReference Publisher { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference">GoogleBigqueryAnalyticsHubListingPublisherOutputReference</a>

---

##### `RestrictedExportConfig`<sup>Required</sup> <a name="RestrictedExportConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.restrictedExportConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference RestrictedExportConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference">GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference</a>

---

##### `BigqueryDatasetInput`<sup>Optional</sup> <a name="BigqueryDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.bigqueryDatasetInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingBigqueryDataset BigqueryDatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataExchangeIdInput"></a>

```csharp
public string DataExchangeIdInput { get; }
```

- *Type:* string

---

##### `DataProviderInput`<sup>Optional</sup> <a name="DataProviderInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataProviderInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingDataProvider DataProviderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.documentationInput"></a>

```csharp
public string DocumentationInput { get; }
```

- *Type:* string

---

##### `IconInput`<sup>Optional</sup> <a name="IconInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.iconInput"></a>

```csharp
public string IconInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.primaryContactInput"></a>

```csharp
public string PrimaryContactInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.publisherInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingPublisher PublisherInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a>

---

##### `RequestAccessInput`<sup>Optional</sup> <a name="RequestAccessInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.requestAccessInput"></a>

```csharp
public string RequestAccessInput { get; }
```

- *Type:* string

---

##### `RestrictedExportConfigInput`<sup>Optional</sup> <a name="RestrictedExportConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.restrictedExportConfigInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingRestrictedExportConfig RestrictedExportConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.documentation"></a>

```csharp
public string Documentation { get; }
```

- *Type:* string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.icon"></a>

```csharp
public string Icon { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequestAccess`<sup>Required</sup> <a name="RequestAccess" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.requestAccess"></a>

```csharp
public string RequestAccess { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListing.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubListingBigqueryDataset <a name="GoogleBigqueryAnalyticsHubListingBigqueryDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingBigqueryDataset {
    string Dataset,
    object SelectedResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset.property.dataset">Dataset</a></code> | <code>string</code> | Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources">SelectedResources</a></code> | <code>object</code> | selected_resources block. |

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#dataset GoogleBigqueryAnalyticsHubListing#dataset}

---

##### `SelectedResources`<sup>Optional</sup> <a name="SelectedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources"></a>

```csharp
public object SelectedResources { get; set; }
```

- *Type:* object

selected_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#selected_resources GoogleBigqueryAnalyticsHubListing#selected_resources}

---

### GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources <a name="GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources {
    string Table = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table">Table</a></code> | <code>string</code> | Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table". |

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#table GoogleBigqueryAnalyticsHubListing#table}

---

### GoogleBigqueryAnalyticsHubListingConfig <a name="GoogleBigqueryAnalyticsHubListingConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleBigqueryAnalyticsHubListingBigqueryDataset BigqueryDataset,
    string DataExchangeId,
    string DisplayName,
    string ListingId,
    string Location,
    string[] Categories = null,
    GoogleBigqueryAnalyticsHubListingDataProvider DataProvider = null,
    string Description = null,
    string Documentation = null,
    string Icon = null,
    string Id = null,
    string PrimaryContact = null,
    string Project = null,
    GoogleBigqueryAnalyticsHubListingPublisher Publisher = null,
    string RequestAccess = null,
    GoogleBigqueryAnalyticsHubListingRestrictedExportConfig RestrictedExportConfig = null,
    GoogleBigqueryAnalyticsHubListingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.bigqueryDataset">BigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a></code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of the listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.listingId">ListingId</a></code> | <code>string</code> | The ID of the listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this data exchange listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.categories">Categories</a></code> | <code>string[]</code> | Categories of the listing. Up to two categories are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.dataProvider">DataProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a></code> | data_provider block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.description">Description</a></code> | <code>string</code> | Short description of the listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.documentation">Documentation</a></code> | <code>string</code> | Documentation describing the listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.icon">Icon</a></code> | <code>string</code> | Base64 encoded image representing the listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#id GoogleBigqueryAnalyticsHubListing#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the listing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#project GoogleBigqueryAnalyticsHubListing#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.publisher">Publisher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a></code> | publisher block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.requestAccess">RequestAccess</a></code> | <code>string</code> | Email or URL of the request access of the listing. Subscribers can use this reference to request access. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.restrictedExportConfig">RestrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | restricted_export_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts">GoogleBigqueryAnalyticsHubListingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BigqueryDataset`<sup>Required</sup> <a name="BigqueryDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.bigqueryDataset"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingBigqueryDataset BigqueryDataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a>

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#bigquery_dataset GoogleBigqueryAnalyticsHubListing#bigquery_dataset}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; set; }
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#data_exchange_id GoogleBigqueryAnalyticsHubListing#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of the listing.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#display_name GoogleBigqueryAnalyticsHubListing#display_name}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#listing_id GoogleBigqueryAnalyticsHubListing#listing_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this data exchange listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#location GoogleBigqueryAnalyticsHubListing#location}

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Categories of the listing. Up to two categories are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#categories GoogleBigqueryAnalyticsHubListing#categories}

---

##### `DataProvider`<sup>Optional</sup> <a name="DataProvider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.dataProvider"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingDataProvider DataProvider { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a>

data_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#data_provider GoogleBigqueryAnalyticsHubListing#data_provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Short description of the listing.

The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#description GoogleBigqueryAnalyticsHubListing#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.documentation"></a>

```csharp
public string Documentation { get; set; }
```

- *Type:* string

Documentation describing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#documentation GoogleBigqueryAnalyticsHubListing#documentation}

---

##### `Icon`<sup>Optional</sup> <a name="Icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.icon"></a>

```csharp
public string Icon { get; set; }
```

- *Type:* string

Base64 encoded image representing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#icon GoogleBigqueryAnalyticsHubListing#icon}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#id GoogleBigqueryAnalyticsHubListing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; set; }
```

- *Type:* string

Email or URL of the primary point of contact of the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#primary_contact GoogleBigqueryAnalyticsHubListing#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#project GoogleBigqueryAnalyticsHubListing#project}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.publisher"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingPublisher Publisher { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a>

publisher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#publisher GoogleBigqueryAnalyticsHubListing#publisher}

---

##### `RequestAccess`<sup>Optional</sup> <a name="RequestAccess" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.requestAccess"></a>

```csharp
public string RequestAccess { get; set; }
```

- *Type:* string

Email or URL of the request access of the listing. Subscribers can use this reference to request access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#request_access GoogleBigqueryAnalyticsHubListing#request_access}

---

##### `RestrictedExportConfig`<sup>Optional</sup> <a name="RestrictedExportConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.restrictedExportConfig"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingRestrictedExportConfig RestrictedExportConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a>

restricted_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#restricted_export_config GoogleBigqueryAnalyticsHubListing#restricted_export_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts">GoogleBigqueryAnalyticsHubListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#timeouts GoogleBigqueryAnalyticsHubListing#timeouts}

---

### GoogleBigqueryAnalyticsHubListingDataProvider <a name="GoogleBigqueryAnalyticsHubListingDataProvider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingDataProvider {
    string Name,
    string PrimaryContact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider.property.name">Name</a></code> | <code>string</code> | Name of the data provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | Email or URL of the data provider. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#name GoogleBigqueryAnalyticsHubListing#name}

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; set; }
```

- *Type:* string

Email or URL of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#primary_contact GoogleBigqueryAnalyticsHubListing#primary_contact}

---

### GoogleBigqueryAnalyticsHubListingPublisher <a name="GoogleBigqueryAnalyticsHubListingPublisher" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingPublisher {
    string Name,
    string PrimaryContact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher.property.name">Name</a></code> | <code>string</code> | Name of the listing publisher. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | Email or URL of the listing publisher. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#name GoogleBigqueryAnalyticsHubListing#name}

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; set; }
```

- *Type:* string

Email or URL of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#primary_contact GoogleBigqueryAnalyticsHubListing#primary_contact}

---

### GoogleBigqueryAnalyticsHubListingRestrictedExportConfig <a name="GoogleBigqueryAnalyticsHubListingRestrictedExportConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingRestrictedExportConfig {
    object Enabled = null,
    object RestrictQueryResult = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled">Enabled</a></code> | <code>object</code> | If true, enable restricted export. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult">RestrictQueryResult</a></code> | <code>object</code> | If true, restrict export of query result derived from restricted linked dataset table. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

If true, enable restricted export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#enabled GoogleBigqueryAnalyticsHubListing#enabled}

---

##### `RestrictQueryResult`<sup>Optional</sup> <a name="RestrictQueryResult" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult"></a>

```csharp
public object RestrictQueryResult { get; set; }
```

- *Type:* object

If true, restrict export of query result derived from restricted linked dataset table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#restrict_query_result GoogleBigqueryAnalyticsHubListing#restrict_query_result}

---

### GoogleBigqueryAnalyticsHubListingTimeouts <a name="GoogleBigqueryAnalyticsHubListingTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#create GoogleBigqueryAnalyticsHubListing#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#delete GoogleBigqueryAnalyticsHubListing#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#update GoogleBigqueryAnalyticsHubListing#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#create GoogleBigqueryAnalyticsHubListing#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#delete GoogleBigqueryAnalyticsHubListing#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_bigquery_analytics_hub_listing#update GoogleBigqueryAnalyticsHubListing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources">PutSelectedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources">ResetSelectedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectedResources` <a name="PutSelectedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources"></a>

```csharp
private void PutSelectedResources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources.parameter.value"></a>

- *Type:* object

---

##### `ResetSelectedResources` <a name="ResetSelectedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources"></a>

```csharp
private void ResetSelectedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources">SelectedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput">SelectedResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SelectedResources`<sup>Required</sup> <a name="SelectedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList SelectedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `SelectedResourcesInput`<sup>Optional</sup> <a name="SelectedResourcesInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput"></a>

```csharp
public object SelectedResourcesInput { get; }
```

- *Type:* object

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingBigqueryDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDataset">GoogleBigqueryAnalyticsHubListingBigqueryDataset</a>

---


### GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList <a name="GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get"></a>

```csharp
private GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable"></a>

```csharp
private void ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryAnalyticsHubListingDataProviderOutputReference <a name="GoogleBigqueryAnalyticsHubListingDataProviderOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingDataProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact"></a>

```csharp
private void ResetPrimaryContact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput">PrimaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput"></a>

```csharp
public string PrimaryContactInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingDataProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingDataProvider">GoogleBigqueryAnalyticsHubListingDataProvider</a>

---


### GoogleBigqueryAnalyticsHubListingPublisherOutputReference <a name="GoogleBigqueryAnalyticsHubListingPublisherOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingPublisherOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact"></a>

```csharp
private void ResetPrimaryContact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput">PrimaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput"></a>

```csharp
public string PrimaryContactInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingPublisher InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingPublisher">GoogleBigqueryAnalyticsHubListingPublisher</a>

---


### GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference <a name="GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult">ResetRestrictQueryResult</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRestrictQueryResult` <a name="ResetRestrictQueryResult" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult"></a>

```csharp
private void ResetRestrictQueryResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess">RestrictDirectTableAccess</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput">RestrictQueryResultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult">RestrictQueryResult</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictDirectTableAccess`<sup>Required</sup> <a name="RestrictDirectTableAccess" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess"></a>

```csharp
public IResolvable RestrictDirectTableAccess { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RestrictQueryResultInput`<sup>Optional</sup> <a name="RestrictQueryResultInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput"></a>

```csharp
public object RestrictQueryResultInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RestrictQueryResult`<sup>Required</sup> <a name="RestrictQueryResult" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult"></a>

```csharp
public object RestrictQueryResult { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingRestrictedExportConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingRestrictedExportConfig">GoogleBigqueryAnalyticsHubListingRestrictedExportConfig</a>

---


### GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListing.GoogleBigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



