# `googleBigqueryTable` Submodule <a name="`googleBigqueryTable` Submodule" id="@cdktf/provider-google-beta.googleBigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryTable <a name="GoogleBigqueryTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTable(Construct Scope, string Id, GoogleBigqueryTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig">GoogleBigqueryTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig">GoogleBigqueryTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration">PutBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions">PutExternalCatalogTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration">PutExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView">PutMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning">PutRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints">PutTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo">PutTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning">PutTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetBiglakeConfiguration">ResetBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetClustering">ResetClustering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalCatalogTableOptions">ResetExternalCatalogTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalDataConfiguration">ResetExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaterializedView">ResetMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaxStaleness">ResetMaxStaleness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRangePartitioning">ResetRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableConstraints">ResetTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableReplicationInfo">ResetTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTimePartitioning">ResetTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBiglakeConfiguration` <a name="PutBiglakeConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration"></a>

```csharp
private void PutBiglakeConfiguration(GoogleBigqueryTableBiglakeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putBiglakeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(GoogleBigqueryTableEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

---

##### `PutExternalCatalogTableOptions` <a name="PutExternalCatalogTableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions"></a>

```csharp
private void PutExternalCatalogTableOptions(GoogleBigqueryTableExternalCatalogTableOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalCatalogTableOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

---

##### `PutExternalDataConfiguration` <a name="PutExternalDataConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration"></a>

```csharp
private void PutExternalDataConfiguration(GoogleBigqueryTableExternalDataConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putExternalDataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

---

##### `PutMaterializedView` <a name="PutMaterializedView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView"></a>

```csharp
private void PutMaterializedView(GoogleBigqueryTableMaterializedView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putMaterializedView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

---

##### `PutRangePartitioning` <a name="PutRangePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning"></a>

```csharp
private void PutRangePartitioning(GoogleBigqueryTableRangePartitioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putRangePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

---

##### `PutTableConstraints` <a name="PutTableConstraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints"></a>

```csharp
private void PutTableConstraints(GoogleBigqueryTableTableConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

---

##### `PutTableReplicationInfo` <a name="PutTableReplicationInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo"></a>

```csharp
private void PutTableReplicationInfo(GoogleBigqueryTableTableReplicationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTableReplicationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

---

##### `PutTimePartitioning` <a name="PutTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning"></a>

```csharp
private void PutTimePartitioning(GoogleBigqueryTableTimePartitioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putTimePartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView"></a>

```csharp
private void PutView(GoogleBigqueryTableView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

---

##### `ResetBiglakeConfiguration` <a name="ResetBiglakeConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetBiglakeConfiguration"></a>

```csharp
private void ResetBiglakeConfiguration()
```

##### `ResetClustering` <a name="ResetClustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetClustering"></a>

```csharp
private void ResetClustering()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExpirationTime"></a>

```csharp
private void ResetExpirationTime()
```

##### `ResetExternalCatalogTableOptions` <a name="ResetExternalCatalogTableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalCatalogTableOptions"></a>

```csharp
private void ResetExternalCatalogTableOptions()
```

##### `ResetExternalDataConfiguration` <a name="ResetExternalDataConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetExternalDataConfiguration"></a>

```csharp
private void ResetExternalDataConfiguration()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaterializedView` <a name="ResetMaterializedView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaterializedView"></a>

```csharp
private void ResetMaterializedView()
```

##### `ResetMaxStaleness` <a name="ResetMaxStaleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetMaxStaleness"></a>

```csharp
private void ResetMaxStaleness()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRangePartitioning` <a name="ResetRangePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRangePartitioning"></a>

```csharp
private void ResetRangePartitioning()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetRequirePartitionFilter"></a>

```csharp
private void ResetRequirePartitionFilter()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTableConstraints` <a name="ResetTableConstraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableConstraints"></a>

```csharp
private void ResetTableConstraints()
```

##### `ResetTableReplicationInfo` <a name="ResetTableReplicationInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTableReplicationInfo"></a>

```csharp
private void ResetTableReplicationInfo()
```

##### `ResetTimePartitioning` <a name="ResetTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetTimePartitioning"></a>

```csharp
private void ResetTimePartitioning()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.resetView"></a>

```csharp
private void ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfiguration">BiglakeConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference">GoogleBigqueryTableBiglakeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference">GoogleBigqueryTableEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptions">ExternalCatalogTableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference">GoogleBigqueryTableExternalDataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference">GoogleBigqueryTableMaterializedViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numBytes">NumBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numLongTermBytes">NumLongTermBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numRows">NumRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference">GoogleBigqueryTableRangePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference">GoogleBigqueryTableTableConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference">GoogleBigqueryTableTableReplicationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference">GoogleBigqueryTableTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference">GoogleBigqueryTableViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfigurationInput">BiglakeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clusteringInput">ClusteringInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptionsInput">ExternalCatalogTableOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfigurationInput">ExternalDataConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedViewInput">MaterializedViewInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStalenessInput">MaxStalenessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioningInput">RangePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraintsInput">TableConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfoInput">TableReplicationInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioningInput">TimePartitioningInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.viewInput">ViewInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clustering">Clustering</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStaleness">MaxStaleness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BiglakeConfiguration`<sup>Required</sup> <a name="BiglakeConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfiguration"></a>

```csharp
public GoogleBigqueryTableBiglakeConfigurationOutputReference BiglakeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference">GoogleBigqueryTableBiglakeConfigurationOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfiguration"></a>

```csharp
public GoogleBigqueryTableEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference">GoogleBigqueryTableEncryptionConfigurationOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExternalCatalogTableOptions`<sup>Required</sup> <a name="ExternalCatalogTableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptions"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsOutputReference ExternalCatalogTableOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsOutputReference</a>

---

##### `ExternalDataConfiguration`<sup>Required</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfiguration"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationOutputReference ExternalDataConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference">GoogleBigqueryTableExternalDataConfigurationOutputReference</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaterializedView`<sup>Required</sup> <a name="MaterializedView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedView"></a>

```csharp
public GoogleBigqueryTableMaterializedViewOutputReference MaterializedView { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference">GoogleBigqueryTableMaterializedViewOutputReference</a>

---

##### `NumBytes`<sup>Required</sup> <a name="NumBytes" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numBytes"></a>

```csharp
public double NumBytes { get; }
```

- *Type:* double

---

##### `NumLongTermBytes`<sup>Required</sup> <a name="NumLongTermBytes" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numLongTermBytes"></a>

```csharp
public double NumLongTermBytes { get; }
```

- *Type:* double

---

##### `NumRows`<sup>Required</sup> <a name="NumRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.numRows"></a>

```csharp
public double NumRows { get; }
```

- *Type:* double

---

##### `RangePartitioning`<sup>Required</sup> <a name="RangePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioning"></a>

```csharp
public GoogleBigqueryTableRangePartitioningOutputReference RangePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference">GoogleBigqueryTableRangePartitioningOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TableConstraints`<sup>Required</sup> <a name="TableConstraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraints"></a>

```csharp
public GoogleBigqueryTableTableConstraintsOutputReference TableConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference">GoogleBigqueryTableTableConstraintsOutputReference</a>

---

##### `TableReplicationInfo`<sup>Required</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfo"></a>

```csharp
public GoogleBigqueryTableTableReplicationInfoOutputReference TableReplicationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference">GoogleBigqueryTableTableReplicationInfoOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioning"></a>

```csharp
public GoogleBigqueryTableTimePartitioningOutputReference TimePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference">GoogleBigqueryTableTimePartitioningOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.view"></a>

```csharp
public GoogleBigqueryTableViewOutputReference View { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference">GoogleBigqueryTableViewOutputReference</a>

---

##### `BiglakeConfigurationInput`<sup>Optional</sup> <a name="BiglakeConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.biglakeConfigurationInput"></a>

```csharp
public GoogleBigqueryTableBiglakeConfiguration BiglakeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

---

##### `ClusteringInput`<sup>Optional</sup> <a name="ClusteringInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clusteringInput"></a>

```csharp
public string[] ClusteringInput { get; }
```

- *Type:* string[]

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.encryptionConfigurationInput"></a>

```csharp
public GoogleBigqueryTableEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTimeInput"></a>

```csharp
public double ExpirationTimeInput { get; }
```

- *Type:* double

---

##### `ExternalCatalogTableOptionsInput`<sup>Optional</sup> <a name="ExternalCatalogTableOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalCatalogTableOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptions ExternalCatalogTableOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

---

##### `ExternalDataConfigurationInput`<sup>Optional</sup> <a name="ExternalDataConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.externalDataConfigurationInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfiguration ExternalDataConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaterializedViewInput`<sup>Optional</sup> <a name="MaterializedViewInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.materializedViewInput"></a>

```csharp
public GoogleBigqueryTableMaterializedView MaterializedViewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

---

##### `MaxStalenessInput`<sup>Optional</sup> <a name="MaxStalenessInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStalenessInput"></a>

```csharp
public string MaxStalenessInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RangePartitioningInput`<sup>Optional</sup> <a name="RangePartitioningInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.rangePartitioningInput"></a>

```csharp
public GoogleBigqueryTableRangePartitioning RangePartitioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilterInput"></a>

```csharp
public object RequirePartitionFilterInput { get; }
```

- *Type:* object

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TableConstraintsInput`<sup>Optional</sup> <a name="TableConstraintsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableConstraintsInput"></a>

```csharp
public GoogleBigqueryTableTableConstraints TableConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `TableReplicationInfoInput`<sup>Optional</sup> <a name="TableReplicationInfoInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableReplicationInfoInput"></a>

```csharp
public GoogleBigqueryTableTableReplicationInfo TableReplicationInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

---

##### `TimePartitioningInput`<sup>Optional</sup> <a name="TimePartitioningInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.timePartitioningInput"></a>

```csharp
public GoogleBigqueryTableTimePartitioning TimePartitioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.viewInput"></a>

```csharp
public GoogleBigqueryTableView ViewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

---

##### `Clustering`<sup>Required</sup> <a name="Clustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.clustering"></a>

```csharp
public string[] Clustering { get; }
```

- *Type:* string[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; }
```

- *Type:* double

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxStaleness`<sup>Required</sup> <a name="MaxStaleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.maxStaleness"></a>

```csharp
public string MaxStaleness { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; }
```

- *Type:* object

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryTableBiglakeConfiguration <a name="GoogleBigqueryTableBiglakeConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableBiglakeConfiguration {
    string ConnectionId,
    string FileFormat,
    string StorageUri,
    string TableFormat
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.connectionId">ConnectionId</a></code> | <code>string</code> | The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.fileFormat">FileFormat</a></code> | <code>string</code> | The file format the data is stored in. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.storageUri">StorageUri</a></code> | <code>string</code> | The fully qualified location prefix of the external folder where table data is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.tableFormat">TableFormat</a></code> | <code>string</code> | The table format the metadata only snapshots are stored in. |

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage.

The connection_id can have the form "<project_id>.<location_id>.<connection_id>" or "projects/<project_id>/locations/<location_id>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.fileFormat"></a>

```csharp
public string FileFormat { get; set; }
```

- *Type:* string

The file format the data is stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#file_format GoogleBigqueryTable#file_format}

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.storageUri"></a>

```csharp
public string StorageUri { get; set; }
```

- *Type:* string

The fully qualified location prefix of the external folder where table data is stored.

The '*' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#storage_uri GoogleBigqueryTable#storage_uri}

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration.property.tableFormat"></a>

```csharp
public string TableFormat { get; set; }
```

- *Type:* string

The table format the metadata only snapshots are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#table_format GoogleBigqueryTable#table_format}

---

### GoogleBigqueryTableConfig <a name="GoogleBigqueryTableConfig" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetId,
    string TableId,
    GoogleBigqueryTableBiglakeConfiguration BiglakeConfiguration = null,
    string[] Clustering = null,
    object DeletionProtection = null,
    string Description = null,
    GoogleBigqueryTableEncryptionConfiguration EncryptionConfiguration = null,
    double ExpirationTime = null,
    GoogleBigqueryTableExternalCatalogTableOptions ExternalCatalogTableOptions = null,
    GoogleBigqueryTableExternalDataConfiguration ExternalDataConfiguration = null,
    string FriendlyName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleBigqueryTableMaterializedView MaterializedView = null,
    string MaxStaleness = null,
    string Project = null,
    GoogleBigqueryTableRangePartitioning RangePartitioning = null,
    object RequirePartitionFilter = null,
    System.Collections.Generic.IDictionary<string, string> ResourceTags = null,
    string Schema = null,
    GoogleBigqueryTableTableConstraints TableConstraints = null,
    GoogleBigqueryTableTableReplicationInfo TableReplicationInfo = null,
    GoogleBigqueryTableTimePartitioning TimePartitioning = null,
    GoogleBigqueryTableView View = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableId">TableId</a></code> | <code>string</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.biglakeConfiguration">BiglakeConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | biglake_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.clustering">Clustering</a></code> | <code>string[]</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.description">Description</a></code> | <code>string</code> | The field description. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalCatalogTableOptions">ExternalCatalogTableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | external_catalog_table_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.friendlyName">FriendlyName</a></code> | <code>string</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.maxStaleness">MaxStaleness</a></code> | <code>string</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags attached to this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.schema">Schema</a></code> | <code>string</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | view block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}

---

##### `BiglakeConfiguration`<sup>Optional</sup> <a name="BiglakeConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.biglakeConfiguration"></a>

```csharp
public GoogleBigqueryTableBiglakeConfiguration BiglakeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

biglake_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#biglake_configuration GoogleBigqueryTable#biglake_configuration}

---

##### `Clustering`<sup>Optional</sup> <a name="Clustering" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.clustering"></a>

```csharp
public string[] Clustering { get; set; }
```

- *Type:* string[]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#clustering GoogleBigqueryTable#clustering}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether Terraform will be prevented from destroying the instance.

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the table will fail. When the field is set to false, deleting the table is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#deletion_protection GoogleBigqueryTable#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#description GoogleBigqueryTable#description}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.encryptionConfiguration"></a>

```csharp
public GoogleBigqueryTableEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#encryption_configuration GoogleBigqueryTable#encryption_configuration}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; set; }
```

- *Type:* double

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#expiration_time GoogleBigqueryTable#expiration_time}

---

##### `ExternalCatalogTableOptions`<sup>Optional</sup> <a name="ExternalCatalogTableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalCatalogTableOptions"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptions ExternalCatalogTableOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

external_catalog_table_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#external_catalog_table_options GoogleBigqueryTable#external_catalog_table_options}

---

##### `ExternalDataConfiguration`<sup>Optional</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.externalDataConfiguration"></a>

```csharp
public GoogleBigqueryTableExternalDataConfiguration ExternalDataConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#external_data_configuration GoogleBigqueryTable#external_data_configuration}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#friendly_name GoogleBigqueryTable#friendly_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#labels GoogleBigqueryTable#labels}

---

##### `MaterializedView`<sup>Optional</sup> <a name="MaterializedView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.materializedView"></a>

```csharp
public GoogleBigqueryTableMaterializedView MaterializedView { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#materialized_view GoogleBigqueryTable#materialized_view}

---

##### `MaxStaleness`<sup>Optional</sup> <a name="MaxStaleness" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.maxStaleness"></a>

```csharp
public string MaxStaleness { get; set; }
```

- *Type:* string

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#max_staleness GoogleBigqueryTable#max_staleness}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#project GoogleBigqueryTable#project}

---

##### `RangePartitioning`<sup>Optional</sup> <a name="RangePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.rangePartitioning"></a>

```csharp
public GoogleBigqueryTableRangePartitioning RangePartitioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#range_partitioning GoogleBigqueryTable#range_partitioning}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; set; }
```

- *Type:* object

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags attached to this table.

Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#resource_tags GoogleBigqueryTable#resource_tags}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}

---

##### `TableConstraints`<sup>Optional</sup> <a name="TableConstraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableConstraints"></a>

```csharp
public GoogleBigqueryTableTableConstraints TableConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#table_constraints GoogleBigqueryTable#table_constraints}

---

##### `TableReplicationInfo`<sup>Optional</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.tableReplicationInfo"></a>

```csharp
public GoogleBigqueryTableTableReplicationInfo TableReplicationInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#table_replication_info GoogleBigqueryTable#table_replication_info}

---

##### `TimePartitioning`<sup>Optional</sup> <a name="TimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.timePartitioning"></a>

```csharp
public GoogleBigqueryTableTimePartitioning TimePartitioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#time_partitioning GoogleBigqueryTable#time_partitioning}

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableConfig.property.view"></a>

```csharp
public GoogleBigqueryTableView View { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#view GoogleBigqueryTable#view}

---

### GoogleBigqueryTableEncryptionConfiguration <a name="GoogleBigqueryTableEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableEncryptionConfiguration {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The self link or full name of a key which should be used to encrypt this table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#kms_key_name GoogleBigqueryTable#kms_key_name}

---

### GoogleBigqueryTableExternalCatalogTableOptions <a name="GoogleBigqueryTableExternalCatalogTableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalCatalogTableOptions {
    string ConnectionId = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor StorageDescriptor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.connectionId">ConnectionId</a></code> | <code>string</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key value pairs defining the parameters and properties of the open source table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | storage_descriptor block. |

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connection is needed to read the open source table from BigQuery Engine. The connection_id can have the form <project_id>.<location_id>.<connection_id> or projects/<project_id>/locations/<location_id>/connections/<connection_id>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key value pairs defining the parameters and properties of the open source table.

Corresponds with hive meta store table parameters. Maximum size of 4Mib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}

---

##### `StorageDescriptor`<sup>Optional</sup> <a name="StorageDescriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions.property.storageDescriptor"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor StorageDescriptor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#storage_descriptor GoogleBigqueryTable#storage_descriptor}

---

### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor {
    string InputFormat = null,
    string LocationUri = null,
    string OutputFormat = null,
    GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo SerdeInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>string</code> | Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.locationUri">LocationUri</a></code> | <code>string</code> | The physical location of the table (e.g. 'gs://spark-dataproc-data/pangea-data/case_sensitive/' or 'gs://spark-dataproc-data/pangea-data/*'). The maximum length is 2056 bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>string</code> | Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | serde_info block. |

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.inputFormat"></a>

```csharp
public string InputFormat { get; set; }
```

- *Type:* string

Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#input_format GoogleBigqueryTable#input_format}

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.locationUri"></a>

```csharp
public string LocationUri { get; set; }
```

- *Type:* string

The physical location of the table (e.g. 'gs://spark-dataproc-data/pangea-data/case_sensitive/' or 'gs://spark-dataproc-data/pangea-data/*'). The maximum length is 2056 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#location_uri GoogleBigqueryTable#location_uri}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#output_format GoogleBigqueryTable#output_format}

---

##### `SerdeInfo`<sup>Optional</sup> <a name="SerdeInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.property.serdeInfo"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo SerdeInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#serde_info GoogleBigqueryTable#serde_info}

---

### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo {
    string SerializationLibrary,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.name">Name</a></code> | <code>string</code> | Name of the SerDe. The maximum length is 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib. |

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; set; }
```

- *Type:* string

Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#serialization_library GoogleBigqueryTable#serialization_library}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the SerDe. The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}

---

### GoogleBigqueryTableExternalDataConfiguration <a name="GoogleBigqueryTableExternalDataConfiguration" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfiguration {
    object Autodetect,
    string[] SourceUris,
    GoogleBigqueryTableExternalDataConfigurationAvroOptions AvroOptions = null,
    GoogleBigqueryTableExternalDataConfigurationBigtableOptions BigtableOptions = null,
    string Compression = null,
    string ConnectionId = null,
    GoogleBigqueryTableExternalDataConfigurationCsvOptions CsvOptions = null,
    string FileSetSpecType = null,
    GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions GoogleSheetsOptions = null,
    GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions HivePartitioningOptions = null,
    object IgnoreUnknownValues = null,
    string JsonExtension = null,
    GoogleBigqueryTableExternalDataConfigurationJsonOptions JsonOptions = null,
    double MaxBadRecords = null,
    string MetadataCacheMode = null,
    string ObjectMetadata = null,
    GoogleBigqueryTableExternalDataConfigurationParquetOptions ParquetOptions = null,
    string ReferenceFileSchemaUri = null,
    string Schema = null,
    string SourceFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.autodetect">Autodetect</a></code> | <code>object</code> | Let BigQuery try to autodetect the schema and format of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | A list of the fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | avro_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.bigtableOptions">BigtableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | bigtable_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.compression">Compression</a></code> | <code>string</code> | The compression type of the data source. Valid values are "NONE" or "GZIP". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.connectionId">ConnectionId</a></code> | <code>string</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.fileSetSpecType">FileSetSpecType</a></code> | <code>string</code> | Specifies how source URIs are interpreted for constructing the file set to load. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | google_sheets_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | hive_partitioning_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>object</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | The maximum number of bad records that BigQuery can ignore when reading data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>string</code> | Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.objectMetadata">ObjectMetadata</a></code> | <code>string</code> | Object Metadata is used to create Object Tables. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>string</code> | When creating an external table, the user can provide a reference file with the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.schema">Schema</a></code> | <code>string</code> | A JSON schema for the external table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". |

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.autodetect"></a>

```csharp
public object Autodetect { get; set; }
```

- *Type:* object

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#autodetect GoogleBigqueryTable#autodetect}

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; set; }
```

- *Type:* string[]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#source_uris GoogleBigqueryTable#source_uris}

---

##### `AvroOptions`<sup>Optional</sup> <a name="AvroOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.avroOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationAvroOptions AvroOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#avro_options GoogleBigqueryTable#avro_options}

---

##### `BigtableOptions`<sup>Optional</sup> <a name="BigtableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.bigtableOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationBigtableOptions BigtableOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

bigtable_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#bigtable_options GoogleBigqueryTable#bigtable_options}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#compression GoogleBigqueryTable#compression}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "<project>.<location>.<connection_id>" or "projects/<project>/locations/<location>/connections/<connection_id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.csvOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationCsvOptions CsvOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#csv_options GoogleBigqueryTable#csv_options}

---

##### `FileSetSpecType`<sup>Optional</sup> <a name="FileSetSpecType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.fileSetSpecType"></a>

```csharp
public string FileSetSpecType { get; set; }
```

- *Type:* string

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#file_set_spec_type GoogleBigqueryTable#file_set_spec_type}

---

##### `GoogleSheetsOptions`<sup>Optional</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.googleSheetsOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions GoogleSheetsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#google_sheets_options GoogleBigqueryTable#google_sheets_options}

---

##### `HivePartitioningOptions`<sup>Optional</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.hivePartitioningOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions HivePartitioningOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#hive_partitioning_options GoogleBigqueryTable#hive_partitioning_options}

---

##### `IgnoreUnknownValues`<sup>Optional</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.ignoreUnknownValues"></a>

```csharp
public object IgnoreUnknownValues { get; set; }
```

- *Type:* object

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#ignore_unknown_values GoogleBigqueryTable#ignore_unknown_values}

---

##### `JsonExtension`<sup>Optional</sup> <a name="JsonExtension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; set; }
```

- *Type:* string

Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded.

To load newline-delimited GeoJSON, specify GEOJSON (and sourceFormat must be set to NEWLINE_DELIMITED_JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#json_extension GoogleBigqueryTable#json_extension}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.jsonOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationJsonOptions JsonOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#json_options GoogleBigqueryTable#json_options}

---

##### `MaxBadRecords`<sup>Optional</sup> <a name="MaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; set; }
```

- *Type:* double

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#max_bad_records GoogleBigqueryTable#max_bad_records}

---

##### `MetadataCacheMode`<sup>Optional</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.metadataCacheMode"></a>

```csharp
public string MetadataCacheMode { get; set; }
```

- *Type:* string

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#metadata_cache_mode GoogleBigqueryTable#metadata_cache_mode}

---

##### `ObjectMetadata`<sup>Optional</sup> <a name="ObjectMetadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.objectMetadata"></a>

```csharp
public string ObjectMetadata { get; set; }
```

- *Type:* string

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#object_metadata GoogleBigqueryTable#object_metadata}

---

##### `ParquetOptions`<sup>Optional</sup> <a name="ParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.parquetOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationParquetOptions ParquetOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#parquet_options GoogleBigqueryTable#parquet_options}

---

##### `ReferenceFileSchemaUri`<sup>Optional</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri"></a>

```csharp
public string ReferenceFileSchemaUri { get; set; }
```

- *Type:* string

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#reference_file_schema_uri GoogleBigqueryTable#reference_file_schema_uri}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; set; }
```

- *Type:* string

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#source_format GoogleBigqueryTable#source_format}

---

### GoogleBigqueryTableExternalDataConfigurationAvroOptions <a name="GoogleBigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationAvroOptions {
    object UseAvroLogicalTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>object</code> | If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). |

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes"></a>

```csharp
public object UseAvroLogicalTypes { get; set; }
```

- *Type:* object

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#use_avro_logical_types GoogleBigqueryTable#use_avro_logical_types}

---

### GoogleBigqueryTableExternalDataConfigurationBigtableOptions <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptions {
    object ColumnFamily = null,
    object IgnoreUnspecifiedColumnFamilies = null,
    object OutputColumnFamiliesAsJson = null,
    object ReadRowkeyAsString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.columnFamily">ColumnFamily</a></code> | <code>object</code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.ignoreUnspecifiedColumnFamilies">IgnoreUnspecifiedColumnFamilies</a></code> | <code>object</code> | If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.outputColumnFamiliesAsJson">OutputColumnFamiliesAsJson</a></code> | <code>object</code> | If field is true, then each column family will be read as a single JSON column. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.readRowkeyAsString">ReadRowkeyAsString</a></code> | <code>object</code> | If field is true, then the rowkey column families will be read and converted to string. |

---

##### `ColumnFamily`<sup>Optional</sup> <a name="ColumnFamily" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.columnFamily"></a>

```csharp
public object ColumnFamily { get; set; }
```

- *Type:* object

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#column_family GoogleBigqueryTable#column_family}

---

##### `IgnoreUnspecifiedColumnFamilies`<sup>Optional</sup> <a name="IgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.ignoreUnspecifiedColumnFamilies"></a>

```csharp
public object IgnoreUnspecifiedColumnFamilies { get; set; }
```

- *Type:* object

If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema.

Otherwise, they are read with BYTES type values. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#ignore_unspecified_column_families GoogleBigqueryTable#ignore_unspecified_column_families}

---

##### `OutputColumnFamiliesAsJson`<sup>Optional</sup> <a name="OutputColumnFamiliesAsJson" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.outputColumnFamiliesAsJson"></a>

```csharp
public object OutputColumnFamiliesAsJson { get; set; }
```

- *Type:* object

If field is true, then each column family will be read as a single JSON column.

Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#output_column_families_as_json GoogleBigqueryTable#output_column_families_as_json}

---

##### `ReadRowkeyAsString`<sup>Optional</sup> <a name="ReadRowkeyAsString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions.property.readRowkeyAsString"></a>

```csharp
public object ReadRowkeyAsString { get; set; }
```

- *Type:* object

If field is true, then the rowkey column families will be read and converted to string.

Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#read_rowkey_as_string GoogleBigqueryTable#read_rowkey_as_string}

---

### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily {
    object Column = null,
    string Encoding = null,
    string FamilyId = null,
    object OnlyReadLatest = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.column">Column</a></code> | <code>object</code> | column block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.encoding">Encoding</a></code> | <code>string</code> | The encoding of the values when the type is not STRING. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.familyId">FamilyId</a></code> | <code>string</code> | Identifier of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | If this is set only the latest version of value are exposed for all columns in this column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.type">Type</a></code> | <code>string</code> | The type to convert the value in cells of this column family. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.column"></a>

```csharp
public object Column { get; set; }
```

- *Type:* object

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#column GoogleBigqueryTable#column}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The encoding of the values when the type is not STRING.

Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `FamilyId`<sup>Optional</sup> <a name="FamilyId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.familyId"></a>

```csharp
public string FamilyId { get; set; }
```

- *Type:* string

Identifier of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#family_id GoogleBigqueryTable#family_id}

---

##### `OnlyReadLatest`<sup>Optional</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; set; }
```

- *Type:* object

If this is set only the latest version of value are exposed for all columns in this column family.

This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#only_read_latest GoogleBigqueryTable#only_read_latest}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type to convert the value in cells of this column family.

The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON". Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn {
    string Encoding = null,
    string FieldName = null,
    object OnlyReadLatest = null,
    string QualifierEncoded = null,
    string QualifierString = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.encoding">Encoding</a></code> | <code>string</code> | The encoding of the values when the type is not STRING. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.fieldName">FieldName</a></code> | <code>string</code> | If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | If this is set, only the latest version of value in this column are exposed. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierEncoded">QualifierEncoded</a></code> | <code>string</code> | Qualifier of the column. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierString">QualifierString</a></code> | <code>string</code> | Qualifier string. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.type">Type</a></code> | <code>string</code> | The type to convert the value in cells of this column. |

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The encoding of the values when the type is not STRING.

Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#field_name GoogleBigqueryTable#field_name}

---

##### `OnlyReadLatest`<sup>Optional</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; set; }
```

- *Type:* object

If this is set, only the latest version of value in this column are exposed.

'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#only_read_latest GoogleBigqueryTable#only_read_latest}

---

##### `QualifierEncoded`<sup>Optional</sup> <a name="QualifierEncoded" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierEncoded"></a>

```csharp
public string QualifierEncoded { get; set; }
```

- *Type:* string

Qualifier of the column.

Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifierString field. Otherwise, a base-64 encoded value must be set to qualifierEncoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as fieldName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#qualifier_encoded GoogleBigqueryTable#qualifier_encoded}

---

##### `QualifierString`<sup>Optional</sup> <a name="QualifierString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.qualifierString"></a>

```csharp
public string QualifierString { get; set; }
```

- *Type:* string

Qualifier string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#qualifier_string GoogleBigqueryTable#qualifier_string}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type to convert the value in cells of this column.

The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON", Default type is "BYTES". 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

### GoogleBigqueryTableExternalDataConfigurationCsvOptions <a name="GoogleBigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationCsvOptions {
    string Quote,
    object AllowJaggedRows = null,
    object AllowQuotedNewlines = null,
    string Encoding = null,
    string FieldDelimiter = null,
    double SkipLeadingRows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.quote">Quote</a></code> | <code>string</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>object</code> | Indicates if BigQuery should accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>object</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.encoding">Encoding</a></code> | <code>string</code> | The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | The number of rows at the top of a CSV file that BigQuery will skip when reading the data. |

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.quote"></a>

```csharp
public string Quote { get; set; }
```

- *Type:* string

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#quote GoogleBigqueryTable#quote}

---

##### `AllowJaggedRows`<sup>Optional</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows"></a>

```csharp
public object AllowJaggedRows { get; set; }
```

- *Type:* object

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#allow_jagged_rows GoogleBigqueryTable#allow_jagged_rows}

---

##### `AllowQuotedNewlines`<sup>Optional</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines"></a>

```csharp
public object AllowQuotedNewlines { get; set; }
```

- *Type:* object

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#allow_quoted_newlines GoogleBigqueryTable#allow_quoted_newlines}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#field_delimiter GoogleBigqueryTable#field_delimiter}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; set; }
```

- *Type:* double

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}

---

### GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions {
    string Range = null,
    double SkipLeadingRows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range">Range</a></code> | <code>string</code> | Range of a sheet to query from. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | The number of rows at the top of the sheet that BigQuery will skip when reading the data. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}

---

##### `SkipLeadingRows`<sup>Optional</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; set; }
```

- *Type:* double

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}

---

### GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions {
    string Mode = null,
    object RequirePartitionFilter = null,
    string SourceUriPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode">Mode</a></code> | <code>string</code> | When set, what mode of hive partitioning to use when reading data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>string</code> | When hive partition detection is requested, a common for all source uris must be required. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#mode GoogleBigqueryTable#mode}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; set; }
```

- *Type:* object

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

##### `SourceUriPrefix`<sup>Optional</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix"></a>

```csharp
public string SourceUriPrefix { get; set; }
```

- *Type:* string

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#source_uri_prefix GoogleBigqueryTable#source_uri_prefix}

---

### GoogleBigqueryTableExternalDataConfigurationJsonOptions <a name="GoogleBigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationJsonOptions {
    string Encoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions.property.encoding">Encoding</a></code> | <code>string</code> | The character encoding of the data. |

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}

---

### GoogleBigqueryTableExternalDataConfigurationParquetOptions <a name="GoogleBigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationParquetOptions {
    object EnableListInference = null,
    object EnumAsString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference">EnableListInference</a></code> | <code>object</code> | Indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString">EnumAsString</a></code> | <code>object</code> | Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `EnableListInference`<sup>Optional</sup> <a name="EnableListInference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference"></a>

```csharp
public object EnableListInference { get; set; }
```

- *Type:* object

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#enable_list_inference GoogleBigqueryTable#enable_list_inference}

---

##### `EnumAsString`<sup>Optional</sup> <a name="EnumAsString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString"></a>

```csharp
public object EnumAsString { get; set; }
```

- *Type:* object

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#enum_as_string GoogleBigqueryTable#enum_as_string}

---

### GoogleBigqueryTableMaterializedView <a name="GoogleBigqueryTableMaterializedView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableMaterializedView {
    string Query,
    object AllowNonIncrementalDefinition = null,
    object EnableRefresh = null,
    double RefreshIntervalMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.query">Query</a></code> | <code>string</code> | A query whose result is persisted. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>object</code> | Allow non incremental materialized view definition. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.enableRefresh">EnableRefresh</a></code> | <code>object</code> | Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>double</code> | Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}

---

##### `AllowNonIncrementalDefinition`<sup>Optional</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.allowNonIncrementalDefinition"></a>

```csharp
public object AllowNonIncrementalDefinition { get; set; }
```

- *Type:* object

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#allow_non_incremental_definition GoogleBigqueryTable#allow_non_incremental_definition}

---

##### `EnableRefresh`<sup>Optional</sup> <a name="EnableRefresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.enableRefresh"></a>

```csharp
public object EnableRefresh { get; set; }
```

- *Type:* object

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#enable_refresh GoogleBigqueryTable#enable_refresh}

---

##### `RefreshIntervalMs`<sup>Optional</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView.property.refreshIntervalMs"></a>

```csharp
public double RefreshIntervalMs { get; set; }
```

- *Type:* double

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#refresh_interval_ms GoogleBigqueryTable#refresh_interval_ms}

---

### GoogleBigqueryTableRangePartitioning <a name="GoogleBigqueryTableRangePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableRangePartitioning {
    string Field,
    GoogleBigqueryTableRangePartitioningRange Range
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.field">Field</a></code> | <code>string</code> | The field used to determine how to create a range-based partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a></code> | range block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning.property.range"></a>

```csharp
public GoogleBigqueryTableRangePartitioningRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}

---

### GoogleBigqueryTableRangePartitioningRange <a name="GoogleBigqueryTableRangePartitioningRange" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableRangePartitioningRange {
    double End,
    double Interval,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.end">End</a></code> | <code>double</code> | End of the range partitioning, exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.interval">Interval</a></code> | <code>double</code> | The width of each range within the partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.start">Start</a></code> | <code>double</code> | Start of the range partitioning, inclusive. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#end GoogleBigqueryTable#end}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#interval GoogleBigqueryTable#interval}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#start GoogleBigqueryTable#start}

---

### GoogleBigqueryTableTableConstraints <a name="GoogleBigqueryTableTableConstraints" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraints {
    object ForeignKeys = null,
    GoogleBigqueryTableTableConstraintsPrimaryKey PrimaryKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.foreignKeys">ForeignKeys</a></code> | <code>object</code> | foreign_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | primary_key block. |

---

##### `ForeignKeys`<sup>Optional</sup> <a name="ForeignKeys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.foreignKeys"></a>

```csharp
public object ForeignKeys { get; set; }
```

- *Type:* object

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#foreign_keys GoogleBigqueryTable#foreign_keys}

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints.property.primaryKey"></a>

```csharp
public GoogleBigqueryTableTableConstraintsPrimaryKey PrimaryKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#primary_key GoogleBigqueryTable#primary_key}

---

### GoogleBigqueryTableTableConstraintsForeignKeys <a name="GoogleBigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeys {
    GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences ColumnReferences,
    GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable ReferencedTable,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | column_references block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | referenced_table block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.name">Name</a></code> | <code>string</code> | Set only if the foreign key constraint is named. |

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.columnReferences"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences ColumnReferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

column_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#column_references GoogleBigqueryTable#column_references}

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.referencedTable"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable ReferencedTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

referenced_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#referenced_table GoogleBigqueryTable#referenced_table}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeys.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Set only if the foreign key constraint is named.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}

---

### GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences <a name="GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences {
    string ReferencedColumn,
    string ReferencingColumn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn">ReferencedColumn</a></code> | <code>string</code> | The column in the primary key that are referenced by the referencingColumn. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn">ReferencingColumn</a></code> | <code>string</code> | The column that composes the foreign key. |

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn"></a>

```csharp
public string ReferencedColumn { get; set; }
```

- *Type:* string

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#referenced_column GoogleBigqueryTable#referenced_column}

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn"></a>

```csharp
public string ReferencingColumn { get; set; }
```

- *Type:* string

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#referencing_column GoogleBigqueryTable#referencing_column}

---

### GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable <a name="GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable {
    string DatasetId,
    string ProjectId,
    string TableId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId">TableId</a></code> | <code>string</code> | The ID of the table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#project_id GoogleBigqueryTable#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}

---

### GoogleBigqueryTableTableConstraintsPrimaryKey <a name="GoogleBigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsPrimaryKey {
    string[] Columns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey.property.columns">Columns</a></code> | <code>string[]</code> | The columns that are composed of the primary key constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#columns GoogleBigqueryTable#columns}

---

### GoogleBigqueryTableTableReplicationInfo <a name="GoogleBigqueryTableTableReplicationInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableReplicationInfo {
    string SourceDatasetId,
    string SourceProjectId,
    string SourceTableId,
    double ReplicationIntervalMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceDatasetId">SourceDatasetId</a></code> | <code>string</code> | The ID of the source dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceProjectId">SourceProjectId</a></code> | <code>string</code> | The ID of the source project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceTableId">SourceTableId</a></code> | <code>string</code> | The ID of the source materialized view. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>double</code> | The interval at which the source materialized view is polled for updates. The default is 300000. |

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceDatasetId"></a>

```csharp
public string SourceDatasetId { get; set; }
```

- *Type:* string

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#source_dataset_id GoogleBigqueryTable#source_dataset_id}

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceProjectId"></a>

```csharp
public string SourceProjectId { get; set; }
```

- *Type:* string

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#source_project_id GoogleBigqueryTable#source_project_id}

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.sourceTableId"></a>

```csharp
public string SourceTableId { get; set; }
```

- *Type:* string

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#source_table_id GoogleBigqueryTable#source_table_id}

---

##### `ReplicationIntervalMs`<sup>Optional</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo.property.replicationIntervalMs"></a>

```csharp
public double ReplicationIntervalMs { get; set; }
```

- *Type:* double

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#replication_interval_ms GoogleBigqueryTable#replication_interval_ms}

---

### GoogleBigqueryTableTimePartitioning <a name="GoogleBigqueryTableTimePartitioning" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTimePartitioning {
    string Type,
    double ExpirationMs = null,
    string Field = null,
    object RequirePartitionFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.type">Type</a></code> | <code>string</code> | The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.expirationMs">ExpirationMs</a></code> | <code>double</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.field">Field</a></code> | <code>string</code> | The field used to determine how to create a time-based partition. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.expirationMs"></a>

```csharp
public double ExpirationMs { get; set; }
```

- *Type:* double

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#expiration_ms GoogleBigqueryTable#expiration_ms}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}

---

##### `RequirePartitionFilter`<sup>Optional</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; set; }
```

- *Type:* object

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}

---

### GoogleBigqueryTableView <a name="GoogleBigqueryTableView" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableView {
    string Query,
    object UseLegacySql = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.query">Query</a></code> | <code>string</code> | A query that BigQuery executes when the view is referenced. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.useLegacySql">UseLegacySql</a></code> | <code>object</code> | Specifies whether to use BigQuery's legacy SQL for this view. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}

---

##### `UseLegacySql`<sup>Optional</sup> <a name="UseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView.property.useLegacySql"></a>

```csharp
public object UseLegacySql { get; set; }
```

- *Type:* object

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_table#use_legacy_sql GoogleBigqueryTable#use_legacy_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryTableBiglakeConfigurationOutputReference <a name="GoogleBigqueryTableBiglakeConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableBiglakeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormatInput">FileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUriInput">StorageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormatInput">TableFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat">FileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri">StorageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat">TableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormatInput"></a>

```csharp
public string FileFormatInput { get; }
```

- *Type:* string

---

##### `StorageUriInput`<sup>Optional</sup> <a name="StorageUriInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUriInput"></a>

```csharp
public string StorageUriInput { get; }
```

- *Type:* string

---

##### `TableFormatInput`<sup>Optional</sup> <a name="TableFormatInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormatInput"></a>

```csharp
public string TableFormatInput { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat"></a>

```csharp
public string FileFormat { get; }
```

- *Type:* string

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri"></a>

```csharp
public string StorageUri { get; }
```

- *Type:* string

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat"></a>

```csharp
public string TableFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableBiglakeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableBiglakeConfiguration">GoogleBigqueryTableBiglakeConfiguration</a>

---


### GoogleBigqueryTableEncryptionConfigurationOutputReference <a name="GoogleBigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableEncryptionConfiguration">GoogleBigqueryTableEncryptionConfiguration</a>

---


### GoogleBigqueryTableExternalCatalogTableOptionsOutputReference <a name="GoogleBigqueryTableExternalCatalogTableOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalCatalogTableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetStorageDescriptor">ResetStorageDescriptor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor"></a>

```csharp
private void PutStorageDescriptor(GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetStorageDescriptor` <a name="ResetStorageDescriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resetStorageDescriptor"></a>

```csharp
private void ResetStorageDescriptor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference StorageDescriptor { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference</a>

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptorInput"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor StorageDescriptorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptions">GoogleBigqueryTableExternalCatalogTableOptions</a>

---


### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo">PutSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetSerdeInfo">ResetSerdeInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSerdeInfo` <a name="PutSerdeInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo"></a>

```csharp
private void PutSerdeInfo(GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetInputFormat"></a>

```csharp
private void ResetInputFormat()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetLocationUri"></a>

```csharp
private void ResetLocationUri()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetSerdeInfo` <a name="ResetSerdeInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resetSerdeInfo"></a>

```csharp
private void ResetSerdeInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUriInput">LocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfoInput">SerdeInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference SerdeInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference</a>

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormatInput"></a>

```csharp
public string InputFormatInput { get; }
```

- *Type:* string

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUriInput"></a>

```csharp
public string LocationUriInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `SerdeInfoInput`<sup>Optional</sup> <a name="SerdeInfoInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo SerdeInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```csharp
public string InputFormat { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---


### GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference <a name="GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">SerializationLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerializationLibraryInput`<sup>Optional</sup> <a name="SerializationLibraryInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```csharp
public string SerializationLibraryInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---


### GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput">UseAvroLogicalTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseAvroLogicalTypesInput`<sup>Optional</sup> <a name="UseAvroLogicalTypesInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput"></a>

```csharp
public object UseAvroLogicalTypesInput { get; }
```

- *Type:* object

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```csharp
public object UseAvroLogicalTypes { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationAvroOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get"></a>

```csharp
private GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetOnlyReadLatest">ResetOnlyReadLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierEncoded">ResetQualifierEncoded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierString">ResetQualifierString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetOnlyReadLatest` <a name="ResetOnlyReadLatest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetOnlyReadLatest"></a>

```csharp
private void ResetOnlyReadLatest()
```

##### `ResetQualifierEncoded` <a name="ResetQualifierEncoded" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierEncoded"></a>

```csharp
private void ResetQualifierEncoded()
```

##### `ResetQualifierString` <a name="ResetQualifierString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetQualifierString"></a>

```csharp
private void ResetQualifierString()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatestInput">OnlyReadLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncodedInput">QualifierEncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierStringInput">QualifierStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded">QualifierEncoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString">QualifierString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `OnlyReadLatestInput`<sup>Optional</sup> <a name="OnlyReadLatestInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatestInput"></a>

```csharp
public object OnlyReadLatestInput { get; }
```

- *Type:* object

---

##### `QualifierEncodedInput`<sup>Optional</sup> <a name="QualifierEncodedInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncodedInput"></a>

```csharp
public string QualifierEncodedInput { get; }
```

- *Type:* string

---

##### `QualifierStringInput`<sup>Optional</sup> <a name="QualifierStringInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierStringInput"></a>

```csharp
public string QualifierStringInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; }
```

- *Type:* object

---

##### `QualifierEncoded`<sup>Required</sup> <a name="QualifierEncoded" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded"></a>

```csharp
public string QualifierEncoded { get; }
```

- *Type:* string

---

##### `QualifierString`<sup>Required</sup> <a name="QualifierString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString"></a>

```csharp
public string QualifierString { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get"></a>

```csharp
private GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetFamilyId">ResetFamilyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetOnlyReadLatest">ResetOnlyReadLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn"></a>

```csharp
private void PutColumn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.putColumn.parameter.value"></a>

- *Type:* object

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFamilyId` <a name="ResetFamilyId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetFamilyId"></a>

```csharp
private void ResetFamilyId()
```

##### `ResetOnlyReadLatest` <a name="ResetOnlyReadLatest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetOnlyReadLatest"></a>

```csharp
private void ResetOnlyReadLatest()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.columnInput">ColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyIdInput">FamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatestInput">OnlyReadLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId">FamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.columnInput"></a>

```csharp
public object ColumnInput { get; }
```

- *Type:* object

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FamilyIdInput`<sup>Optional</sup> <a name="FamilyIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyIdInput"></a>

```csharp
public string FamilyIdInput { get; }
```

- *Type:* string

---

##### `OnlyReadLatestInput`<sup>Optional</sup> <a name="OnlyReadLatestInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatestInput"></a>

```csharp
public object OnlyReadLatestInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FamilyId`<sup>Required</sup> <a name="FamilyId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId"></a>

```csharp
public string FamilyId { get; }
```

- *Type:* string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest"></a>

```csharp
public object OnlyReadLatest { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily">PutColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetColumnFamily">ResetColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetIgnoreUnspecifiedColumnFamilies">ResetIgnoreUnspecifiedColumnFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetOutputColumnFamiliesAsJson">ResetOutputColumnFamiliesAsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetReadRowkeyAsString">ResetReadRowkeyAsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnFamily` <a name="PutColumnFamily" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily"></a>

```csharp
private void PutColumnFamily(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.putColumnFamily.parameter.value"></a>

- *Type:* object

---

##### `ResetColumnFamily` <a name="ResetColumnFamily" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetColumnFamily"></a>

```csharp
private void ResetColumnFamily()
```

##### `ResetIgnoreUnspecifiedColumnFamilies` <a name="ResetIgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetIgnoreUnspecifiedColumnFamilies"></a>

```csharp
private void ResetIgnoreUnspecifiedColumnFamilies()
```

##### `ResetOutputColumnFamiliesAsJson` <a name="ResetOutputColumnFamiliesAsJson" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetOutputColumnFamiliesAsJson"></a>

```csharp
private void ResetOutputColumnFamiliesAsJson()
```

##### `ResetReadRowkeyAsString` <a name="ResetReadRowkeyAsString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resetReadRowkeyAsString"></a>

```csharp
private void ResetReadRowkeyAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily">ColumnFamily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamilyInput">ColumnFamilyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamiliesInput">IgnoreUnspecifiedColumnFamiliesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJsonInput">OutputColumnFamiliesAsJsonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsStringInput">ReadRowkeyAsStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies">IgnoreUnspecifiedColumnFamilies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson">OutputColumnFamiliesAsJson</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString">ReadRowkeyAsString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList ColumnFamily { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a>

---

##### `ColumnFamilyInput`<sup>Optional</sup> <a name="ColumnFamilyInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamilyInput"></a>

```csharp
public object ColumnFamilyInput { get; }
```

- *Type:* object

---

##### `IgnoreUnspecifiedColumnFamiliesInput`<sup>Optional</sup> <a name="IgnoreUnspecifiedColumnFamiliesInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamiliesInput"></a>

```csharp
public object IgnoreUnspecifiedColumnFamiliesInput { get; }
```

- *Type:* object

---

##### `OutputColumnFamiliesAsJsonInput`<sup>Optional</sup> <a name="OutputColumnFamiliesAsJsonInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJsonInput"></a>

```csharp
public object OutputColumnFamiliesAsJsonInput { get; }
```

- *Type:* object

---

##### `ReadRowkeyAsStringInput`<sup>Optional</sup> <a name="ReadRowkeyAsStringInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsStringInput"></a>

```csharp
public object ReadRowkeyAsStringInput { get; }
```

- *Type:* object

---

##### `IgnoreUnspecifiedColumnFamilies`<sup>Required</sup> <a name="IgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies"></a>

```csharp
public object IgnoreUnspecifiedColumnFamilies { get; }
```

- *Type:* object

---

##### `OutputColumnFamiliesAsJson`<sup>Required</sup> <a name="OutputColumnFamiliesAsJson" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson"></a>

```csharp
public object OutputColumnFamiliesAsJson { get; }
```

- *Type:* object

---

##### `ReadRowkeyAsString`<sup>Required</sup> <a name="ReadRowkeyAsString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString"></a>

```csharp
public object ReadRowkeyAsString { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationBigtableOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows">ResetAllowJaggedRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines">ResetAllowQuotedNewlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowJaggedRows` <a name="ResetAllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows"></a>

```csharp
private void ResetAllowJaggedRows()
```

##### `ResetAllowQuotedNewlines` <a name="ResetAllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines"></a>

```csharp
private void ResetAllowQuotedNewlines()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows"></a>

```csharp
private void ResetSkipLeadingRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput">AllowJaggedRowsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput">AllowQuotedNewlinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput">QuoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">Quote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowJaggedRowsInput`<sup>Optional</sup> <a name="AllowJaggedRowsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput"></a>

```csharp
public object AllowJaggedRowsInput { get; }
```

- *Type:* object

---

##### `AllowQuotedNewlinesInput`<sup>Optional</sup> <a name="AllowQuotedNewlinesInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput"></a>

```csharp
public object AllowQuotedNewlinesInput { get; }
```

- *Type:* object

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `QuoteInput`<sup>Optional</sup> <a name="QuoteInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput"></a>

```csharp
public string QuoteInput { get; }
```

- *Type:* string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput"></a>

```csharp
public double SkipLeadingRowsInput { get; }
```

- *Type:* double

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```csharp
public object AllowJaggedRows { get; }
```

- *Type:* object

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```csharp
public object AllowQuotedNewlines { get; }
```

- *Type:* object

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```csharp
public string Quote { get; }
```

- *Type:* string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationCsvOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows">ResetSkipLeadingRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetSkipLeadingRows` <a name="ResetSkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows"></a>

```csharp
private void ResetSkipLeadingRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput">SkipLeadingRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `SkipLeadingRowsInput`<sup>Optional</sup> <a name="SkipLeadingRowsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput"></a>

```csharp
public double SkipLeadingRowsInput { get; }
```

- *Type:* double

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix">ResetSourceUriPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter"></a>

```csharp
private void ResetRequirePartitionFilter()
```

##### `ResetSourceUriPrefix` <a name="ResetSourceUriPrefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix"></a>

```csharp
private void ResetSourceUriPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput">SourceUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput"></a>

```csharp
public object RequirePartitionFilterInput { get; }
```

- *Type:* object

---

##### `SourceUriPrefixInput`<sup>Optional</sup> <a name="SourceUriPrefixInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput"></a>

```csharp
public string SourceUriPrefixInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; }
```

- *Type:* object

---

##### `SourceUriPrefix`<sup>Required</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```csharp
public string SourceUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationJsonOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---


### GoogleBigqueryTableExternalDataConfigurationOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putAvroOptions">PutAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions">PutBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions">PutGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions">PutHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions">PutParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions">ResetAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetBigtableOptions">ResetBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType">ResetFileSetSpecType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions">ResetGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions">ResetHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues">ResetIgnoreUnknownValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension">ResetJsonExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords">ResetMaxBadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode">ResetMetadataCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata">ResetObjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions">ResetParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri">ResetReferenceFileSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroOptions` <a name="PutAvroOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putAvroOptions"></a>

```csharp
private void PutAvroOptions(GoogleBigqueryTableExternalDataConfigurationAvroOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putAvroOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `PutBigtableOptions` <a name="PutBigtableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions"></a>

```csharp
private void PutBigtableOptions(GoogleBigqueryTableExternalDataConfigurationBigtableOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putBigtableOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions"></a>

```csharp
private void PutCsvOptions(GoogleBigqueryTableExternalDataConfigurationCsvOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `PutGoogleSheetsOptions` <a name="PutGoogleSheetsOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions"></a>

```csharp
private void PutGoogleSheetsOptions(GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `PutHivePartitioningOptions` <a name="PutHivePartitioningOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions"></a>

```csharp
private void PutHivePartitioningOptions(GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putJsonOptions"></a>

```csharp
private void PutJsonOptions(GoogleBigqueryTableExternalDataConfigurationJsonOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `PutParquetOptions` <a name="PutParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions"></a>

```csharp
private void PutParquetOptions(GoogleBigqueryTableExternalDataConfigurationParquetOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `ResetAvroOptions` <a name="ResetAvroOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions"></a>

```csharp
private void ResetAvroOptions()
```

##### `ResetBigtableOptions` <a name="ResetBigtableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetBigtableOptions"></a>

```csharp
private void ResetBigtableOptions()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions"></a>

```csharp
private void ResetCsvOptions()
```

##### `ResetFileSetSpecType` <a name="ResetFileSetSpecType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType"></a>

```csharp
private void ResetFileSetSpecType()
```

##### `ResetGoogleSheetsOptions` <a name="ResetGoogleSheetsOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions"></a>

```csharp
private void ResetGoogleSheetsOptions()
```

##### `ResetHivePartitioningOptions` <a name="ResetHivePartitioningOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions"></a>

```csharp
private void ResetHivePartitioningOptions()
```

##### `ResetIgnoreUnknownValues` <a name="ResetIgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues"></a>

```csharp
private void ResetIgnoreUnknownValues()
```

##### `ResetJsonExtension` <a name="ResetJsonExtension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonExtension"></a>

```csharp
private void ResetJsonExtension()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions"></a>

```csharp
private void ResetJsonOptions()
```

##### `ResetMaxBadRecords` <a name="ResetMaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords"></a>

```csharp
private void ResetMaxBadRecords()
```

##### `ResetMetadataCacheMode` <a name="ResetMetadataCacheMode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode"></a>

```csharp
private void ResetMetadataCacheMode()
```

##### `ResetObjectMetadata` <a name="ResetObjectMetadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata"></a>

```csharp
private void ResetObjectMetadata()
```

##### `ResetParquetOptions` <a name="ResetParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions"></a>

```csharp
private void ResetParquetOptions()
```

##### `ResetReferenceFileSchemaUri` <a name="ResetReferenceFileSchemaUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri"></a>

```csharp
private void ResetReferenceFileSchemaUri()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat"></a>

```csharp
private void ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions">BigtableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput">AutodetectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput">AvroOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptionsInput">BigtableOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput">FileSetSpecTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput">GoogleSheetsOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput">HivePartitioningOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput">IgnoreUnknownValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput">JsonExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput">MaxBadRecordsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput">MetadataCacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput">ObjectMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput">ParquetOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput">ReferenceFileSchemaUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput">SourceUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect">Autodetect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">FileSetSpecType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">ObjectMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvroOptions`<sup>Required</sup> <a name="AvroOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference AvroOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a>

---

##### `BigtableOptions`<sup>Required</sup> <a name="BigtableOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference BigtableOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference</a>

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference CsvOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a>

---

##### `GoogleSheetsOptions`<sup>Required</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference GoogleSheetsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a>

---

##### `HivePartitioningOptions`<sup>Required</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference HivePartitioningOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference JsonOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a>

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference ParquetOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference">GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a>

---

##### `AutodetectInput`<sup>Optional</sup> <a name="AutodetectInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput"></a>

```csharp
public object AutodetectInput { get; }
```

- *Type:* object

---

##### `AvroOptionsInput`<sup>Optional</sup> <a name="AvroOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationAvroOptions AvroOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationAvroOptions">GoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `BigtableOptionsInput`<sup>Optional</sup> <a name="BigtableOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationBigtableOptions BigtableOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationBigtableOptions">GoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationCsvOptions CsvOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationCsvOptions">GoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `FileSetSpecTypeInput`<sup>Optional</sup> <a name="FileSetSpecTypeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput"></a>

```csharp
public string FileSetSpecTypeInput { get; }
```

- *Type:* string

---

##### `GoogleSheetsOptionsInput`<sup>Optional</sup> <a name="GoogleSheetsOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions GoogleSheetsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `HivePartitioningOptionsInput`<sup>Optional</sup> <a name="HivePartitioningOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions HivePartitioningOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `IgnoreUnknownValuesInput`<sup>Optional</sup> <a name="IgnoreUnknownValuesInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput"></a>

```csharp
public object IgnoreUnknownValuesInput { get; }
```

- *Type:* object

---

##### `JsonExtensionInput`<sup>Optional</sup> <a name="JsonExtensionInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtensionInput"></a>

```csharp
public string JsonExtensionInput { get; }
```

- *Type:* string

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationJsonOptions JsonOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationJsonOptions">GoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `MaxBadRecordsInput`<sup>Optional</sup> <a name="MaxBadRecordsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput"></a>

```csharp
public double MaxBadRecordsInput { get; }
```

- *Type:* double

---

##### `MetadataCacheModeInput`<sup>Optional</sup> <a name="MetadataCacheModeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput"></a>

```csharp
public string MetadataCacheModeInput { get; }
```

- *Type:* string

---

##### `ObjectMetadataInput`<sup>Optional</sup> <a name="ObjectMetadataInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput"></a>

```csharp
public string ObjectMetadataInput { get; }
```

- *Type:* string

---

##### `ParquetOptionsInput`<sup>Optional</sup> <a name="ParquetOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationParquetOptions ParquetOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `ReferenceFileSchemaUriInput`<sup>Optional</sup> <a name="ReferenceFileSchemaUriInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput"></a>

```csharp
public string ReferenceFileSchemaUriInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput"></a>

```csharp
public string SourceFormatInput { get; }
```

- *Type:* string

---

##### `SourceUrisInput`<sup>Optional</sup> <a name="SourceUrisInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput"></a>

```csharp
public string[] SourceUrisInput { get; }
```

- *Type:* string[]

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```csharp
public object Autodetect { get; }
```

- *Type:* object

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `FileSetSpecType`<sup>Required</sup> <a name="FileSetSpecType" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```csharp
public string FileSetSpecType { get; }
```

- *Type:* string

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```csharp
public object IgnoreUnknownValues { get; }
```

- *Type:* object

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; }
```

- *Type:* string

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; }
```

- *Type:* double

---

##### `MetadataCacheMode`<sup>Required</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```csharp
public string MetadataCacheMode { get; }
```

- *Type:* string

---

##### `ObjectMetadata`<sup>Required</sup> <a name="ObjectMetadata" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```csharp
public string ObjectMetadata { get; }
```

- *Type:* string

---

##### `ReferenceFileSchemaUri`<sup>Required</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```csharp
public string ReferenceFileSchemaUri { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfiguration">GoogleBigqueryTableExternalDataConfiguration</a>

---


### GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference">ResetEnableListInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString">ResetEnumAsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableListInference` <a name="ResetEnableListInference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference"></a>

```csharp
private void ResetEnableListInference()
```

##### `ResetEnumAsString` <a name="ResetEnumAsString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString"></a>

```csharp
private void ResetEnumAsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput">EnableListInferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput">EnumAsStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">EnableListInference</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">EnumAsString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableListInferenceInput`<sup>Optional</sup> <a name="EnableListInferenceInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```csharp
public object EnableListInferenceInput { get; }
```

- *Type:* object

---

##### `EnumAsStringInput`<sup>Optional</sup> <a name="EnumAsStringInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput"></a>

```csharp
public object EnumAsStringInput { get; }
```

- *Type:* object

---

##### `EnableListInference`<sup>Required</sup> <a name="EnableListInference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```csharp
public object EnableListInference { get; }
```

- *Type:* object

---

##### `EnumAsString`<sup>Required</sup> <a name="EnumAsString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```csharp
public object EnumAsString { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableExternalDataConfigurationParquetOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableExternalDataConfigurationParquetOptions">GoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---


### GoogleBigqueryTableMaterializedViewOutputReference <a name="GoogleBigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableMaterializedViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition">ResetAllowNonIncrementalDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetEnableRefresh">ResetEnableRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs">ResetRefreshIntervalMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowNonIncrementalDefinition` <a name="ResetAllowNonIncrementalDefinition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition"></a>

```csharp
private void ResetAllowNonIncrementalDefinition()
```

##### `ResetEnableRefresh` <a name="ResetEnableRefresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetEnableRefresh"></a>

```csharp
private void ResetEnableRefresh()
```

##### `ResetRefreshIntervalMs` <a name="ResetRefreshIntervalMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs"></a>

```csharp
private void ResetRefreshIntervalMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput">AllowNonIncrementalDefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefreshInput">EnableRefreshInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput">RefreshIntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh">EnableRefresh</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowNonIncrementalDefinitionInput`<sup>Optional</sup> <a name="AllowNonIncrementalDefinitionInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput"></a>

```csharp
public object AllowNonIncrementalDefinitionInput { get; }
```

- *Type:* object

---

##### `EnableRefreshInput`<sup>Optional</sup> <a name="EnableRefreshInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefreshInput"></a>

```csharp
public object EnableRefreshInput { get; }
```

- *Type:* object

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RefreshIntervalMsInput`<sup>Optional</sup> <a name="RefreshIntervalMsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput"></a>

```csharp
public double RefreshIntervalMsInput { get; }
```

- *Type:* double

---

##### `AllowNonIncrementalDefinition`<sup>Required</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```csharp
public object AllowNonIncrementalDefinition { get; }
```

- *Type:* object

---

##### `EnableRefresh`<sup>Required</sup> <a name="EnableRefresh" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```csharp
public object EnableRefresh { get; }
```

- *Type:* object

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RefreshIntervalMs`<sup>Required</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```csharp
public double RefreshIntervalMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableMaterializedView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableMaterializedView">GoogleBigqueryTableMaterializedView</a>

---


### GoogleBigqueryTableRangePartitioningOutputReference <a name="GoogleBigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableRangePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange">PutRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange"></a>

```csharp
private void PutRange(GoogleBigqueryTableRangePartitioningRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference">GoogleBigqueryTableRangePartitioningRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.range"></a>

```csharp
public GoogleBigqueryTableRangePartitioningRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference">GoogleBigqueryTableRangePartitioningRangeOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.rangeInput"></a>

```csharp
public GoogleBigqueryTableRangePartitioningRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableRangePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioning">GoogleBigqueryTableRangePartitioning</a>

---


### GoogleBigqueryTableRangePartitioningRangeOutputReference <a name="GoogleBigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableRangePartitioningRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableRangePartitioningRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableRangePartitioningRange">GoogleBigqueryTableRangePartitioningRange</a>

---


### GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput">ReferencedColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput">ReferencingColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">ReferencedColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">ReferencingColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferencedColumnInput`<sup>Optional</sup> <a name="ReferencedColumnInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput"></a>

```csharp
public string ReferencedColumnInput { get; }
```

- *Type:* string

---

##### `ReferencingColumnInput`<sup>Optional</sup> <a name="ReferencingColumnInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput"></a>

```csharp
public string ReferencingColumnInput { get; }
```

- *Type:* string

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```csharp
public string ReferencedColumn { get; }
```

- *Type:* string

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```csharp
public string ReferencingColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### GoogleBigqueryTableTableConstraintsForeignKeysList <a name="GoogleBigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.get"></a>

```csharp
private GoogleBigqueryTableTableConstraintsForeignKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryTableTableConstraintsForeignKeysOutputReference <a name="GoogleBigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences">PutColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable">PutReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnReferences` <a name="PutColumnReferences" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences"></a>

```csharp
private void PutColumnReferences(GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `PutReferencedTable` <a name="PutReferencedTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable"></a>

```csharp
private void PutReferencedTable(GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput">ColumnReferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput">ReferencedTableInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference ColumnReferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a>

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference ReferencedTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a>

---

##### `ColumnReferencesInput`<sup>Optional</sup> <a name="ColumnReferencesInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences ColumnReferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReferencedTableInput`<sup>Optional</sup> <a name="ReferencedTableInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable ReferencedTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### GoogleBigqueryTableTableConstraintsOutputReference <a name="GoogleBigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putForeignKeys">PutForeignKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetForeignKeys">ResetForeignKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForeignKeys` <a name="PutForeignKeys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putForeignKeys"></a>

```csharp
private void PutForeignKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putForeignKeys.parameter.value"></a>

- *Type:* object

---

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putPrimaryKey"></a>

```csharp
private void PutPrimaryKey(GoogleBigqueryTableTableConstraintsPrimaryKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

---

##### `ResetForeignKeys` <a name="ResetForeignKeys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetForeignKeys"></a>

```csharp
private void ResetForeignKeys()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.resetPrimaryKey"></a>

```csharp
private void ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys">ForeignKeys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList">GoogleBigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference">GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeysInput">ForeignKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForeignKeys`<sup>Required</sup> <a name="ForeignKeys" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```csharp
public GoogleBigqueryTableTableConstraintsForeignKeysList ForeignKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsForeignKeysList">GoogleBigqueryTableTableConstraintsForeignKeysList</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```csharp
public GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference PrimaryKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference">GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference</a>

---

##### `ForeignKeysInput`<sup>Optional</sup> <a name="ForeignKeysInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeysInput"></a>

```csharp
public object ForeignKeysInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.primaryKeyInput"></a>

```csharp
public GoogleBigqueryTableTableConstraintsPrimaryKey PrimaryKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableTableConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraints">GoogleBigqueryTableTableConstraints</a>

---


### GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableTableConstraintsPrimaryKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableConstraintsPrimaryKey">GoogleBigqueryTableTableConstraintsPrimaryKey</a>

---


### GoogleBigqueryTableTableReplicationInfoOutputReference <a name="GoogleBigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTableReplicationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs">ResetReplicationIntervalMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationIntervalMs` <a name="ResetReplicationIntervalMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs"></a>

```csharp
private void ResetReplicationIntervalMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput">ReplicationIntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput">SourceDatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput">SourceProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput">SourceTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">SourceDatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">SourceProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">SourceTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationIntervalMsInput`<sup>Optional</sup> <a name="ReplicationIntervalMsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput"></a>

```csharp
public double ReplicationIntervalMsInput { get; }
```

- *Type:* double

---

##### `SourceDatasetIdInput`<sup>Optional</sup> <a name="SourceDatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput"></a>

```csharp
public string SourceDatasetIdInput { get; }
```

- *Type:* string

---

##### `SourceProjectIdInput`<sup>Optional</sup> <a name="SourceProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput"></a>

```csharp
public string SourceProjectIdInput { get; }
```

- *Type:* string

---

##### `SourceTableIdInput`<sup>Optional</sup> <a name="SourceTableIdInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput"></a>

```csharp
public string SourceTableIdInput { get; }
```

- *Type:* string

---

##### `ReplicationIntervalMs`<sup>Required</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```csharp
public double ReplicationIntervalMs { get; }
```

- *Type:* double

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```csharp
public string SourceDatasetId { get; }
```

- *Type:* string

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```csharp
public string SourceProjectId { get; }
```

- *Type:* string

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```csharp
public string SourceTableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableTableReplicationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTableReplicationInfo">GoogleBigqueryTableTableReplicationInfo</a>

---


### GoogleBigqueryTableTimePartitioningOutputReference <a name="GoogleBigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableTimePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter">ResetRequirePartitionFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetExpirationMs"></a>

```csharp
private void ResetExpirationMs()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetRequirePartitionFilter` <a name="ResetRequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter"></a>

```csharp
private void ResetRequirePartitionFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput">RequirePartitionFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMsInput"></a>

```csharp
public double ExpirationMsInput { get; }
```

- *Type:* double

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `RequirePartitionFilterInput`<sup>Optional</sup> <a name="RequirePartitionFilterInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput"></a>

```csharp
public object RequirePartitionFilterInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```csharp
public double ExpirationMs { get; }
```

- *Type:* double

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```csharp
public object RequirePartitionFilter { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableTimePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableTimePartitioning">GoogleBigqueryTableTimePartitioning</a>

---


### GoogleBigqueryTableViewOutputReference <a name="GoogleBigqueryTableViewOutputReference" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryTableViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resetUseLegacySql">ResetUseLegacySql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseLegacySql` <a name="ResetUseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.resetUseLegacySql"></a>

```csharp
private void ResetUseLegacySql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySqlInput">UseLegacySqlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `UseLegacySqlInput`<sup>Optional</sup> <a name="UseLegacySqlInput" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySqlInput"></a>

```csharp
public object UseLegacySqlInput { get; }
```

- *Type:* object

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.useLegacySql"></a>

```csharp
public object UseLegacySql { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableViewOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryTableView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryTable.GoogleBigqueryTableView">GoogleBigqueryTableView</a>

---



