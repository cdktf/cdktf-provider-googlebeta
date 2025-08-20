# `googleStorageInsightsDatasetConfig` Submodule <a name="`googleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageInsightsDatasetConfig <a name="GoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfig(Construct Scope, string Id, GoogleStorageInsightsDatasetConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig">GoogleStorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig">GoogleStorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">PutExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations">PutExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">PutIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations">PutIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders">PutSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects">PutSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">ResetExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">ResetExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">ResetIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">ResetIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">ResetIncludeNewlyCreatedBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset">ResetLinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber">ResetOrganizationNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope">ResetOrganizationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders">ResetSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects">ResetSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludeCloudStorageBuckets` <a name="PutExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```csharp
private void PutExcludeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `PutExcludeCloudStorageLocations` <a name="PutExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```csharp
private void PutExcludeCloudStorageLocations(GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity"></a>

```csharp
private void PutIdentity(GoogleStorageInsightsDatasetConfigIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `PutIncludeCloudStorageBuckets` <a name="PutIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```csharp
private void PutIncludeCloudStorageBuckets(GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `PutIncludeCloudStorageLocations` <a name="PutIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```csharp
private void PutIncludeCloudStorageLocations(GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `PutSourceFolders` <a name="PutSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders"></a>

```csharp
private void PutSourceFolders(GoogleStorageInsightsDatasetConfigSourceFolders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `PutSourceProjects` <a name="PutSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects"></a>

```csharp
private void PutSourceProjects(GoogleStorageInsightsDatasetConfigSourceProjects Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageInsightsDatasetConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludeCloudStorageBuckets` <a name="ResetExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```csharp
private void ResetExcludeCloudStorageBuckets()
```

##### `ResetExcludeCloudStorageLocations` <a name="ResetExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```csharp
private void ResetExcludeCloudStorageLocations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeCloudStorageBuckets` <a name="ResetIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```csharp
private void ResetIncludeCloudStorageBuckets()
```

##### `ResetIncludeCloudStorageLocations` <a name="ResetIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```csharp
private void ResetIncludeCloudStorageLocations()
```

##### `ResetIncludeNewlyCreatedBuckets` <a name="ResetIncludeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```csharp
private void ResetIncludeNewlyCreatedBuckets()
```

##### `ResetLinkDataset` <a name="ResetLinkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset"></a>

```csharp
private void ResetLinkDataset()
```

##### `ResetOrganizationNumber` <a name="ResetOrganizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```csharp
private void ResetOrganizationNumber()
```

##### `ResetOrganizationScope` <a name="ResetOrganizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope"></a>

```csharp
private void ResetOrganizationScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSourceFolders` <a name="ResetSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders"></a>

```csharp
private void ResetSourceFolders()
```

##### `ResetSourceProjects` <a name="ResetSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects"></a>

```csharp
private void ResetSourceProjects()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageInsightsDatasetConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageInsightsDatasetConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageInsightsDatasetConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageInsightsDatasetConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageInsightsDatasetConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState">DatasetConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">DatasetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">ExcludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">ExcludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">IncludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">IncludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">IncludeNewlyCreatedBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput">LinkDatasetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput">OrganizationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput">OrganizationScopeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput">SourceFoldersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput">SourceProjectsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset">LinkDataset</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope">OrganizationScope</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DatasetConfigState`<sup>Required</sup> <a name="DatasetConfigState" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```csharp
public string DatasetConfigState { get; }
```

- *Type:* string

---

##### `ExcludeCloudStorageBuckets`<sup>Required</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference ExcludeCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `ExcludeCloudStorageLocations`<sup>Required</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference ExcludeCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `IncludeCloudStorageBuckets`<sup>Required</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference IncludeCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `IncludeCloudStorageLocations`<sup>Required</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference IncludeCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link"></a>

```csharp
public GoogleStorageInsightsDatasetConfigLinkList Link { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFolders`<sup>Required</sup> <a name="SourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference SourceFolders { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `SourceProjects`<sup>Required</sup> <a name="SourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference SourceProjects { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts"></a>

```csharp
public GoogleStorageInsightsDatasetConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DatasetConfigIdInput`<sup>Optional</sup> <a name="DatasetConfigIdInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```csharp
public string DatasetConfigIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludeCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets ExcludeCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `ExcludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludeCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations ExcludeCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludeCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets IncludeCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `IncludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludeCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations IncludeCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `IncludeNewlyCreatedBucketsInput`<sup>Optional</sup> <a name="IncludeNewlyCreatedBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```csharp
public object IncludeNewlyCreatedBucketsInput { get; }
```

- *Type:* object

---

##### `LinkDatasetInput`<sup>Optional</sup> <a name="LinkDatasetInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```csharp
public object LinkDatasetInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationNumberInput`<sup>Optional</sup> <a name="OrganizationNumberInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```csharp
public string OrganizationNumberInput { get; }
```

- *Type:* string

---

##### `OrganizationScopeInput`<sup>Optional</sup> <a name="OrganizationScopeInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```csharp
public object OrganizationScopeInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```csharp
public double RetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `SourceFoldersInput`<sup>Optional</sup> <a name="SourceFoldersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceFolders SourceFoldersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `SourceProjectsInput`<sup>Optional</sup> <a name="SourceProjectsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceProjects SourceProjectsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```csharp
public string DatasetConfigId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeNewlyCreatedBuckets`<sup>Required</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```csharp
public object IncludeNewlyCreatedBuckets { get; }
```

- *Type:* object

---

##### `LinkDataset`<sup>Required</sup> <a name="LinkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```csharp
public object LinkDataset { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OrganizationNumber`<sup>Required</sup> <a name="OrganizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```csharp
public string OrganizationNumber { get; }
```

- *Type:* string

---

##### `OrganizationScope`<sup>Required</sup> <a name="OrganizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```csharp
public object OrganizationScope { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageInsightsDatasetConfigConfig <a name="GoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetConfigId,
    GoogleStorageInsightsDatasetConfigIdentity Identity,
    string Location,
    double RetentionPeriodDays,
    string Description = null,
    GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets ExcludeCloudStorageBuckets = null,
    GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations ExcludeCloudStorageLocations = null,
    string Id = null,
    GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets IncludeCloudStorageBuckets = null,
    GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations IncludeCloudStorageLocations = null,
    object IncludeNewlyCreatedBuckets = null,
    object LinkDataset = null,
    string OrganizationNumber = null,
    object OrganizationScope = null,
    string Project = null,
    GoogleStorageInsightsDatasetConfigSourceFolders SourceFolders = null,
    GoogleStorageInsightsDatasetConfigSourceProjects SourceProjects = null,
    GoogleStorageInsightsDatasetConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description">Description</a></code> | <code>string</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>object</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset">LinkDataset</a></code> | <code>object</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>string</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope">OrganizationScope</a></code> | <code>object</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```csharp
public string DatasetConfigId { get; set; }
```

- *Type:* string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#dataset_config_id GoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#identity GoogleStorageInsightsDatasetConfig#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#location GoogleStorageInsightsDatasetConfig#location}

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; set; }
```

- *Type:* double

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#retention_period_days GoogleStorageInsightsDatasetConfig#retention_period_days}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#description GoogleStorageInsightsDatasetConfig#description}

---

##### `ExcludeCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets ExcludeCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `ExcludeCloudStorageLocations`<sup>Optional</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations ExcludeCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_locations GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeCloudStorageBuckets`<sup>Optional</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets IncludeCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `IncludeCloudStorageLocations`<sup>Optional</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations IncludeCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_locations GoogleStorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `IncludeNewlyCreatedBuckets`<sup>Optional</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```csharp
public object IncludeNewlyCreatedBuckets { get; set; }
```

- *Type:* object

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#include_newly_created_buckets GoogleStorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `LinkDataset`<sup>Optional</sup> <a name="LinkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```csharp
public object LinkDataset { get; set; }
```

- *Type:* object

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#link_dataset GoogleStorageInsightsDatasetConfig#link_dataset}

---

##### `OrganizationNumber`<sup>Optional</sup> <a name="OrganizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```csharp
public string OrganizationNumber { get; set; }
```

- *Type:* string

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#organization_number GoogleStorageInsightsDatasetConfig#organization_number}

---

##### `OrganizationScope`<sup>Optional</sup> <a name="OrganizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```csharp
public object OrganizationScope { get; set; }
```

- *Type:* object

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#organization_scope GoogleStorageInsightsDatasetConfig#organization_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}.

---

##### `SourceFolders`<sup>Optional</sup> <a name="SourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceFolders SourceFolders { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#source_folders GoogleStorageInsightsDatasetConfig#source_folders}

---

##### `SourceProjects`<sup>Optional</sup> <a name="SourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceProjects SourceProjects { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#source_projects GoogleStorageInsightsDatasetConfig#source_projects}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts"></a>

```csharp
public GoogleStorageInsightsDatasetConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#timeouts GoogleStorageInsightsDatasetConfig#timeouts}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets {
    object CloudStorageBuckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code>object</code> | cloud_storage_buckets block. |

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```csharp
public object CloudStorageBuckets { get; set; }
```

- *Type:* object

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {
    string BucketName = null,
    string BucketPrefixRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">BucketName</a></code> | <code>string</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `BucketPrefixRegex`<sup>Optional</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; set; }
```

- *Type:* string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigIdentity <a name="GoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type">Type</a></code> | <code>string</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#type GoogleStorageInsightsDatasetConfig#type}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets {
    object CloudStorageBuckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code>object</code> | cloud_storage_buckets block. |

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```csharp
public object CloudStorageBuckets { get; set; }
```

- *Type:* object

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {
    string BucketName = null,
    string BucketPrefixRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">BucketName</a></code> | <code>string</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `BucketPrefixRegex`<sup>Optional</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; set; }
```

- *Type:* string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigLink <a name="GoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigLink {

};
```


### GoogleStorageInsightsDatasetConfigSourceFolders <a name="GoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigSourceFolders {
    string[] FolderNumbers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers">FolderNumbers</a></code> | <code>string[]</code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `FolderNumbers`<sup>Optional</sup> <a name="FolderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```csharp
public string[] FolderNumbers { get; set; }
```

- *Type:* string[]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#folder_numbers GoogleStorageInsightsDatasetConfig#folder_numbers}

---

### GoogleStorageInsightsDatasetConfigSourceProjects <a name="GoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigSourceProjects {
    string[] ProjectNumbers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers">ProjectNumbers</a></code> | <code>string[]</code> | The list of project numbers to include in the DatasetConfig. |

---

##### `ProjectNumbers`<sup>Optional</sup> <a name="ProjectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```csharp
public string[] ProjectNumbers { get; set; }
```

- *Type:* string[]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#project_numbers GoogleStorageInsightsDatasetConfig#project_numbers}

---

### GoogleStorageInsightsDatasetConfigTimeouts <a name="GoogleStorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```csharp
private GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">ResetBucketPrefixRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefixRegex` <a name="ResetBucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```csharp
private void ResetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">BucketPrefixRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixRegexInput`<sup>Optional</sup> <a name="BucketPrefixRegexInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```csharp
public string BucketPrefixRegexInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">PutCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStorageBuckets` <a name="PutCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```csharp
private void PutCloudStorageBuckets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">CloudStorageBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList CloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `CloudStorageBucketsInput`<sup>Optional</sup> <a name="CloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```csharp
public object CloudStorageBucketsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="GoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```csharp
private GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">ResetBucketPrefixRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefixRegex` <a name="ResetBucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```csharp
private void ResetBucketPrefixRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">BucketPrefixRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixRegexInput`<sup>Optional</sup> <a name="BucketPrefixRegexInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```csharp
public string BucketPrefixRegexInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">PutCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStorageBuckets` <a name="PutCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```csharp
private void PutCloudStorageBuckets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">CloudStorageBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList CloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `CloudStorageBucketsInput`<sup>Optional</sup> <a name="CloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```csharp
public object CloudStorageBucketsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigLinkList <a name="GoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigLinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get"></a>

```csharp
private GoogleStorageInsightsDatasetConfigLinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleStorageInsightsDatasetConfigLinkOutputReference <a name="GoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">Linked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Linked`<sup>Required</sup> <a name="Linked" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```csharp
public IResolvable Linked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a>

---


### GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">ResetFolderNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFolderNumbers` <a name="ResetFolderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```csharp
private void ResetFolderNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">FolderNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">FolderNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FolderNumbersInput`<sup>Optional</sup> <a name="FolderNumbersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```csharp
public string[] FolderNumbersInput { get; }
```

- *Type:* string[]

---

##### `FolderNumbers`<sup>Required</sup> <a name="FolderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```csharp
public string[] FolderNumbers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceFolders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">ResetProjectNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectNumbers` <a name="ResetProjectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```csharp
private void ResetProjectNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">ProjectNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">ProjectNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectNumbersInput`<sup>Optional</sup> <a name="ProjectNumbersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```csharp
public string[] ProjectNumbersInput { get; }
```

- *Type:* string[]

---

##### `ProjectNumbers`<sup>Required</sup> <a name="ProjectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```csharp
public string[] ProjectNumbers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageInsightsDatasetConfigSourceProjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---


### GoogleStorageInsightsDatasetConfigTimeoutsOutputReference <a name="GoogleStorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageInsightsDatasetConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



