# `googleSccOrganizationSccBigQueryExport` Submodule <a name="`googleSccOrganizationSccBigQueryExport` Submodule" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccOrganizationSccBigQueryExport <a name="GoogleSccOrganizationSccBigQueryExport" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export google_scc_organization_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccOrganizationSccBigQueryExport(Construct Scope, string Id, GoogleSccOrganizationSccBigQueryExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig">GoogleSccOrganizationSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig">GoogleSccOrganizationSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSccOrganizationSccBigQueryExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccOrganizationSccBigQueryExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccOrganizationSccBigQueryExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccOrganizationSccBigQueryExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSccOrganizationSccBigQueryExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccOrganizationSccBigQueryExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccOrganizationSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccOrganizationSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.mostRecentEditor">MostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference">GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.mostRecentEditor"></a>

```csharp
public string MostRecentEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeouts"></a>

```csharp
public GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference">GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportIdInput"></a>

```csharp
public string BigQueryExportIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccOrganizationSccBigQueryExportConfig <a name="GoogleSccOrganizationSccBigQueryExportConfig" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccOrganizationSccBigQueryExportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BigQueryExportId,
    string Organization,
    string Dataset = null,
    string Description = null,
    string Filter = null,
    string Id = null,
    GoogleSccOrganizationSccBigQueryExportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.organization">Organization</a></code> | <code>string</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dataset">Dataset</a></code> | <code>string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.description">Description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.filter">Filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.bigQueryExportId"></a>

```csharp
public string BigQueryExportId { get; set; }
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#big_query_export_id GoogleSccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#organization GoogleSccOrganizationSccBigQueryExport#organization}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#dataset GoogleSccOrganizationSccBigQueryExport#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#description GoogleSccOrganizationSccBigQueryExport#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#filter GoogleSccOrganizationSccBigQueryExport#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.timeouts"></a>

```csharp
public GoogleSccOrganizationSccBigQueryExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#timeouts GoogleSccOrganizationSccBigQueryExport#timeouts}

---

### GoogleSccOrganizationSccBigQueryExportTimeouts <a name="GoogleSccOrganizationSccBigQueryExportTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccOrganizationSccBigQueryExportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#create GoogleSccOrganizationSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#delete GoogleSccOrganizationSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#update GoogleSccOrganizationSccBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#create GoogleSccOrganizationSccBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#delete GoogleSccOrganizationSccBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_scc_organization_scc_big_query_export#update GoogleSccOrganizationSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference <a name="GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



