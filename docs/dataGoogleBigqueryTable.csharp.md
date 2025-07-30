# `dataGoogleBigqueryTable` Submodule <a name="`dataGoogleBigqueryTable` Submodule" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryTable <a name="DataGoogleBigqueryTable" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTable(Construct Scope, string Id, DataGoogleBigqueryTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig">DataGoogleBigqueryTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig">DataGoogleBigqueryTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleBigqueryTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleBigqueryTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleBigqueryTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleBigqueryTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleBigqueryTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBigqueryTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.biglakeConfiguration">BiglakeConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList">DataGoogleBigqueryTableBiglakeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.clustering">Clustering</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.deletionProtection">DeletionProtection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList">DataGoogleBigqueryTableEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalCatalogTableOptions">ExternalCatalogTableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList">DataGoogleBigqueryTableExternalCatalogTableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalDataConfiguration">ExternalDataConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList">DataGoogleBigqueryTableExternalDataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.ignoreAutoGeneratedSchema">IgnoreAutoGeneratedSchema</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.ignoreSchemaChanges">IgnoreSchemaChanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.materializedView">MaterializedView</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList">DataGoogleBigqueryTableMaterializedViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.maxStaleness">MaxStaleness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numBytes">NumBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numLongTermBytes">NumLongTermBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numRows">NumRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.rangePartitioning">RangePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList">DataGoogleBigqueryTableRangePartitioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.resourceTags">ResourceTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schemaForeignTypeInfo">SchemaForeignTypeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList">DataGoogleBigqueryTableSchemaForeignTypeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList">DataGoogleBigqueryTableTableConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableMetadataView">TableMetadataView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableReplicationInfo">TableReplicationInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList">DataGoogleBigqueryTableTableReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.timePartitioning">TimePartitioning</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList">DataGoogleBigqueryTableTimePartitioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList">DataGoogleBigqueryTableViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableIdInput">TableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BiglakeConfiguration`<sup>Required</sup> <a name="BiglakeConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.biglakeConfiguration"></a>

```csharp
public DataGoogleBigqueryTableBiglakeConfigurationList BiglakeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList">DataGoogleBigqueryTableBiglakeConfigurationList</a>

---

##### `Clustering`<sup>Required</sup> <a name="Clustering" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.clustering"></a>

```csharp
public string[] Clustering { get; }
```

- *Type:* string[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.encryptionConfiguration"></a>

```csharp
public DataGoogleBigqueryTableEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList">DataGoogleBigqueryTableEncryptionConfigurationList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; }
```

- *Type:* double

---

##### `ExternalCatalogTableOptions`<sup>Required</sup> <a name="ExternalCatalogTableOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalCatalogTableOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalCatalogTableOptionsList ExternalCatalogTableOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList">DataGoogleBigqueryTableExternalCatalogTableOptionsList</a>

---

##### `ExternalDataConfiguration`<sup>Required</sup> <a name="ExternalDataConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.externalDataConfiguration"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationList ExternalDataConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList">DataGoogleBigqueryTableExternalDataConfigurationList</a>

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `IgnoreAutoGeneratedSchema`<sup>Required</sup> <a name="IgnoreAutoGeneratedSchema" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.ignoreAutoGeneratedSchema"></a>

```csharp
public IResolvable IgnoreAutoGeneratedSchema { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IgnoreSchemaChanges`<sup>Required</sup> <a name="IgnoreSchemaChanges" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.ignoreSchemaChanges"></a>

```csharp
public string[] IgnoreSchemaChanges { get; }
```

- *Type:* string[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaterializedView`<sup>Required</sup> <a name="MaterializedView" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.materializedView"></a>

```csharp
public DataGoogleBigqueryTableMaterializedViewList MaterializedView { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList">DataGoogleBigqueryTableMaterializedViewList</a>

---

##### `MaxStaleness`<sup>Required</sup> <a name="MaxStaleness" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.maxStaleness"></a>

```csharp
public string MaxStaleness { get; }
```

- *Type:* string

---

##### `NumBytes`<sup>Required</sup> <a name="NumBytes" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numBytes"></a>

```csharp
public double NumBytes { get; }
```

- *Type:* double

---

##### `NumLongTermBytes`<sup>Required</sup> <a name="NumLongTermBytes" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numLongTermBytes"></a>

```csharp
public double NumLongTermBytes { get; }
```

- *Type:* double

---

##### `NumRows`<sup>Required</sup> <a name="NumRows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.numRows"></a>

```csharp
public double NumRows { get; }
```

- *Type:* double

---

##### `RangePartitioning`<sup>Required</sup> <a name="RangePartitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.rangePartitioning"></a>

```csharp
public DataGoogleBigqueryTableRangePartitioningList RangePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList">DataGoogleBigqueryTableRangePartitioningList</a>

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.requirePartitionFilter"></a>

```csharp
public IResolvable RequirePartitionFilter { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.resourceTags"></a>

```csharp
public StringMap ResourceTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SchemaForeignTypeInfo`<sup>Required</sup> <a name="SchemaForeignTypeInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.schemaForeignTypeInfo"></a>

```csharp
public DataGoogleBigqueryTableSchemaForeignTypeInfoList SchemaForeignTypeInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList">DataGoogleBigqueryTableSchemaForeignTypeInfoList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TableConstraints`<sup>Required</sup> <a name="TableConstraints" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableConstraints"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsList TableConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList">DataGoogleBigqueryTableTableConstraintsList</a>

---

##### `TableMetadataView`<sup>Required</sup> <a name="TableMetadataView" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableMetadataView"></a>

```csharp
public string TableMetadataView { get; }
```

- *Type:* string

---

##### `TableReplicationInfo`<sup>Required</sup> <a name="TableReplicationInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableReplicationInfo"></a>

```csharp
public DataGoogleBigqueryTableTableReplicationInfoList TableReplicationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList">DataGoogleBigqueryTableTableReplicationInfoList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimePartitioning`<sup>Required</sup> <a name="TimePartitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.timePartitioning"></a>

```csharp
public DataGoogleBigqueryTableTimePartitioningList TimePartitioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList">DataGoogleBigqueryTableTimePartitioningList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.view"></a>

```csharp
public DataGoogleBigqueryTableViewList View { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList">DataGoogleBigqueryTableViewList</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableIdInput"></a>

```csharp
public string TableIdInput { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryTableBiglakeConfiguration <a name="DataGoogleBigqueryTableBiglakeConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableBiglakeConfiguration {

};
```


### DataGoogleBigqueryTableConfig <a name="DataGoogleBigqueryTableConfig" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetId,
    string TableId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.tableId">TableId</a></code> | <code>string</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table#id DataGoogleBigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table#dataset_id DataGoogleBigqueryTable#dataset_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.tableId"></a>

```csharp
public string TableId { get; set; }
```

- *Type:* string

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table#table_id DataGoogleBigqueryTable#table_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table#id DataGoogleBigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/data-sources/google_bigquery_table#project DataGoogleBigqueryTable#project}

---

### DataGoogleBigqueryTableEncryptionConfiguration <a name="DataGoogleBigqueryTableEncryptionConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableEncryptionConfiguration {

};
```


### DataGoogleBigqueryTableExternalCatalogTableOptions <a name="DataGoogleBigqueryTableExternalCatalogTableOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptions {

};
```


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor {

};
```


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo {

};
```


### DataGoogleBigqueryTableExternalDataConfiguration <a name="DataGoogleBigqueryTableExternalDataConfiguration" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfiguration {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationAvroOptions {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationCsvOptions {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationJsonOptions {

};
```


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptions <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationParquetOptions {

};
```


### DataGoogleBigqueryTableMaterializedView <a name="DataGoogleBigqueryTableMaterializedView" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableMaterializedView {

};
```


### DataGoogleBigqueryTableRangePartitioning <a name="DataGoogleBigqueryTableRangePartitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableRangePartitioning {

};
```


### DataGoogleBigqueryTableRangePartitioningRange <a name="DataGoogleBigqueryTableRangePartitioningRange" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableRangePartitioningRange {

};
```


### DataGoogleBigqueryTableSchemaForeignTypeInfo <a name="DataGoogleBigqueryTableSchemaForeignTypeInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableSchemaForeignTypeInfo {

};
```


### DataGoogleBigqueryTableTableConstraints <a name="DataGoogleBigqueryTableTableConstraints" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraints {

};
```


### DataGoogleBigqueryTableTableConstraintsForeignKeys <a name="DataGoogleBigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeys {

};
```


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences {

};
```


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable {

};
```


### DataGoogleBigqueryTableTableConstraintsPrimaryKey <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsPrimaryKey {

};
```


### DataGoogleBigqueryTableTableReplicationInfo <a name="DataGoogleBigqueryTableTableReplicationInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableReplicationInfo {

};
```


### DataGoogleBigqueryTableTimePartitioning <a name="DataGoogleBigqueryTableTimePartitioning" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTimePartitioning {

};
```


### DataGoogleBigqueryTableView <a name="DataGoogleBigqueryTableView" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableView {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBigqueryTableBiglakeConfigurationList <a name="DataGoogleBigqueryTableBiglakeConfigurationList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableBiglakeConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get"></a>

```csharp
private DataGoogleBigqueryTableBiglakeConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableBiglakeConfigurationOutputReference <a name="DataGoogleBigqueryTableBiglakeConfigurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableBiglakeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat">FileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri">StorageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat">TableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration">DataGoogleBigqueryTableBiglakeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.fileFormat"></a>

```csharp
public string FileFormat { get; }
```

- *Type:* string

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.storageUri"></a>

```csharp
public string StorageUri { get; }
```

- *Type:* string

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.tableFormat"></a>

```csharp
public string TableFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableBiglakeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableBiglakeConfiguration">DataGoogleBigqueryTableBiglakeConfiguration</a>

---


### DataGoogleBigqueryTableEncryptionConfigurationList <a name="DataGoogleBigqueryTableEncryptionConfigurationList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get"></a>

```csharp
private DataGoogleBigqueryTableEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableEncryptionConfigurationOutputReference <a name="DataGoogleBigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration">DataGoogleBigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableEncryptionConfiguration">DataGoogleBigqueryTableEncryptionConfiguration</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters">Parameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions">DataGoogleBigqueryTableExternalCatalogTableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.parameters"></a>

```csharp
public StringMap Parameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.storageDescriptor"></a>

```csharp
public DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList StorageDescriptor { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalCatalogTableOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptions">DataGoogleBigqueryTableExternalCatalogTableOptions</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```csharp
public string InputFormat { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.serdeInfo"></a>

```csharp
public DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList SerdeInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor</a>

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference <a name="DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```csharp
public StringMap Parameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo">DataGoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">UseAvroLogicalTypes</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions">DataGoogleBigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseAvroLogicalTypes`<sup>Required</sup> <a name="UseAvroLogicalTypes" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```csharp
public IResolvable UseAvroLogicalTypes { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationAvroOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptions">DataGoogleBigqueryTableExternalDataConfigurationAvroOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded">QualifierEncoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString">QualifierString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.onlyReadLatest"></a>

```csharp
public IResolvable OnlyReadLatest { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QualifierEncoded`<sup>Required</sup> <a name="QualifierEncoded" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierEncoded"></a>

```csharp
public string QualifierEncoded { get; }
```

- *Type:* string

---

##### `QualifierString`<sup>Required</sup> <a name="QualifierString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.qualifierString"></a>

```csharp
public string QualifierString { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId">FamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest">OnlyReadLatest</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.column"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList</a>

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FamilyId`<sup>Required</sup> <a name="FamilyId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.familyId"></a>

```csharp
public string FamilyId { get; }
```

- *Type:* string

---

##### `OnlyReadLatest`<sup>Required</sup> <a name="OnlyReadLatest" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.onlyReadLatest"></a>

```csharp
public IResolvable OnlyReadLatest { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily">ColumnFamily</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies">IgnoreUnspecifiedColumnFamilies</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson">OutputColumnFamiliesAsJson</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString">ReadRowkeyAsString</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.columnFamily"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList ColumnFamily { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList</a>

---

##### `IgnoreUnspecifiedColumnFamilies`<sup>Required</sup> <a name="IgnoreUnspecifiedColumnFamilies" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.ignoreUnspecifiedColumnFamilies"></a>

```csharp
public IResolvable IgnoreUnspecifiedColumnFamilies { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OutputColumnFamiliesAsJson`<sup>Required</sup> <a name="OutputColumnFamiliesAsJson" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.outputColumnFamiliesAsJson"></a>

```csharp
public IResolvable OutputColumnFamiliesAsJson { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReadRowkeyAsString`<sup>Required</sup> <a name="ReadRowkeyAsString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.readRowkeyAsString"></a>

```csharp
public IResolvable ReadRowkeyAsString { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">AllowJaggedRows</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">AllowQuotedNewlines</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">Quote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions">DataGoogleBigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowJaggedRows`<sup>Required</sup> <a name="AllowJaggedRows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```csharp
public IResolvable AllowJaggedRows { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AllowQuotedNewlines`<sup>Required</sup> <a name="AllowQuotedNewlines" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```csharp
public IResolvable AllowQuotedNewlines { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```csharp
public string Quote { get; }
```

- *Type:* string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationCsvOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptions">DataGoogleBigqueryTableExternalDataConfigurationCsvOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">SkipLeadingRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `SkipLeadingRows`<sup>Required</sup> <a name="SkipLeadingRows" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```csharp
public double SkipLeadingRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">SourceUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```csharp
public IResolvable RequirePartitionFilter { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SourceUriPrefix`<sup>Required</sup> <a name="SourceUriPrefix" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```csharp
public string SourceUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions">DataGoogleBigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationJsonOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptions">DataGoogleBigqueryTableExternalDataConfigurationJsonOptions</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationList <a name="DataGoogleBigqueryTableExternalDataConfigurationList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect">Autodetect</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">AvroOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList">DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions">BigtableOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList">DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">FileSetSpecType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">GoogleSheetsOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">HivePartitioningOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">IgnoreUnknownValues</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension">JsonExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList">DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">MaxBadRecords</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">MetadataCacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">ObjectMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">ParquetOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList">DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">ReferenceFileSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">SourceUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration">DataGoogleBigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autodetect`<sup>Required</sup> <a name="Autodetect" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```csharp
public IResolvable Autodetect { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AvroOptions`<sup>Required</sup> <a name="AvroOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList AvroOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList">DataGoogleBigqueryTableExternalDataConfigurationAvroOptionsList</a>

---

##### `BigtableOptions`<sup>Required</sup> <a name="BigtableOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.bigtableOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList BigtableOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList">DataGoogleBigqueryTableExternalDataConfigurationBigtableOptionsList</a>

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList CsvOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList">DataGoogleBigqueryTableExternalDataConfigurationCsvOptionsList</a>

---

##### `FileSetSpecType`<sup>Required</sup> <a name="FileSetSpecType" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```csharp
public string FileSetSpecType { get; }
```

- *Type:* string

---

##### `GoogleSheetsOptions`<sup>Required</sup> <a name="GoogleSheetsOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList GoogleSheetsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList">DataGoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList</a>

---

##### `HivePartitioningOptions`<sup>Required</sup> <a name="HivePartitioningOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList HivePartitioningOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList">DataGoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList</a>

---

##### `IgnoreUnknownValues`<sup>Required</sup> <a name="IgnoreUnknownValues" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```csharp
public IResolvable IgnoreUnknownValues { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JsonExtension`<sup>Required</sup> <a name="JsonExtension" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonExtension"></a>

```csharp
public string JsonExtension { get; }
```

- *Type:* string

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList JsonOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList">DataGoogleBigqueryTableExternalDataConfigurationJsonOptionsList</a>

---

##### `MaxBadRecords`<sup>Required</sup> <a name="MaxBadRecords" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```csharp
public double MaxBadRecords { get; }
```

- *Type:* double

---

##### `MetadataCacheMode`<sup>Required</sup> <a name="MetadataCacheMode" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```csharp
public string MetadataCacheMode { get; }
```

- *Type:* string

---

##### `ObjectMetadata`<sup>Required</sup> <a name="ObjectMetadata" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```csharp
public string ObjectMetadata { get; }
```

- *Type:* string

---

##### `ParquetOptions`<sup>Required</sup> <a name="ParquetOptions" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList ParquetOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList">DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList</a>

---

##### `ReferenceFileSchemaUri`<sup>Required</sup> <a name="ReferenceFileSchemaUri" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```csharp
public string ReferenceFileSchemaUri { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `SourceUris`<sup>Required</sup> <a name="SourceUris" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```csharp
public string[] SourceUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfiguration">DataGoogleBigqueryTableExternalDataConfiguration</a>

---


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get"></a>

```csharp
private DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">EnableListInference</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">EnumAsString</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions">DataGoogleBigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableListInference`<sup>Required</sup> <a name="EnableListInference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```csharp
public IResolvable EnableListInference { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnumAsString`<sup>Required</sup> <a name="EnumAsString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```csharp
public IResolvable EnumAsString { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableExternalDataConfigurationParquetOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableExternalDataConfigurationParquetOptions">DataGoogleBigqueryTableExternalDataConfigurationParquetOptions</a>

---


### DataGoogleBigqueryTableMaterializedViewList <a name="DataGoogleBigqueryTableMaterializedViewList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableMaterializedViewList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get"></a>

```csharp
private DataGoogleBigqueryTableMaterializedViewOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableMaterializedViewOutputReference <a name="DataGoogleBigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableMaterializedViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">AllowNonIncrementalDefinition</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh">EnableRefresh</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">RefreshIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView">DataGoogleBigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowNonIncrementalDefinition`<sup>Required</sup> <a name="AllowNonIncrementalDefinition" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```csharp
public IResolvable AllowNonIncrementalDefinition { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableRefresh`<sup>Required</sup> <a name="EnableRefresh" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```csharp
public IResolvable EnableRefresh { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RefreshIntervalMs`<sup>Required</sup> <a name="RefreshIntervalMs" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```csharp
public double RefreshIntervalMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableMaterializedView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableMaterializedView">DataGoogleBigqueryTableMaterializedView</a>

---


### DataGoogleBigqueryTableRangePartitioningList <a name="DataGoogleBigqueryTableRangePartitioningList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableRangePartitioningList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get"></a>

```csharp
private DataGoogleBigqueryTableRangePartitioningOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableRangePartitioningOutputReference <a name="DataGoogleBigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableRangePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList">DataGoogleBigqueryTableRangePartitioningRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning">DataGoogleBigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.range"></a>

```csharp
public DataGoogleBigqueryTableRangePartitioningRangeList Range { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList">DataGoogleBigqueryTableRangePartitioningRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableRangePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioning">DataGoogleBigqueryTableRangePartitioning</a>

---


### DataGoogleBigqueryTableRangePartitioningRangeList <a name="DataGoogleBigqueryTableRangePartitioningRangeList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableRangePartitioningRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get"></a>

```csharp
private DataGoogleBigqueryTableRangePartitioningRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableRangePartitioningRangeOutputReference <a name="DataGoogleBigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableRangePartitioningRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange">DataGoogleBigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableRangePartitioningRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableRangePartitioningRange">DataGoogleBigqueryTableRangePartitioningRange</a>

---


### DataGoogleBigqueryTableSchemaForeignTypeInfoList <a name="DataGoogleBigqueryTableSchemaForeignTypeInfoList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableSchemaForeignTypeInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get"></a>

```csharp
private DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference <a name="DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.typeSystem">TypeSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo">DataGoogleBigqueryTableSchemaForeignTypeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeSystem`<sup>Required</sup> <a name="TypeSystem" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.typeSystem"></a>

```csharp
public string TypeSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableSchemaForeignTypeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableSchemaForeignTypeInfo">DataGoogleBigqueryTableSchemaForeignTypeInfo</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get"></a>

```csharp
private DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">ReferencedColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">ReferencingColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferencedColumn`<sup>Required</sup> <a name="ReferencedColumn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```csharp
public string ReferencedColumn { get; }
```

- *Type:* string

---

##### `ReferencingColumn`<sup>Required</sup> <a name="ReferencingColumn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```csharp
public string ReferencingColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get"></a>

```csharp
private DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">ColumnReferences</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">ReferencedTable</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys">DataGoogleBigqueryTableTableConstraintsForeignKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnReferences`<sup>Required</sup> <a name="ColumnReferences" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList ColumnReferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList">DataGoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList ReferencedTable { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsForeignKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeys">DataGoogleBigqueryTableTableConstraintsForeignKeys</a>

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get"></a>

```csharp
private DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable">DataGoogleBigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### DataGoogleBigqueryTableTableConstraintsList <a name="DataGoogleBigqueryTableTableConstraintsList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get"></a>

```csharp
private DataGoogleBigqueryTableTableConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTableConstraintsOutputReference <a name="DataGoogleBigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys">ForeignKeys</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList">DataGoogleBigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList">DataGoogleBigqueryTableTableConstraintsPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints">DataGoogleBigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForeignKeys`<sup>Required</sup> <a name="ForeignKeys" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsForeignKeysList ForeignKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsForeignKeysList">DataGoogleBigqueryTableTableConstraintsForeignKeysList</a>

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsPrimaryKeyList PrimaryKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList">DataGoogleBigqueryTableTableConstraintsPrimaryKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTableConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraints">DataGoogleBigqueryTableTableConstraints</a>

---


### DataGoogleBigqueryTableTableConstraintsPrimaryKeyList <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKeyList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsPrimaryKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get"></a>

```csharp
private DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey">DataGoogleBigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTableConstraintsPrimaryKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableConstraintsPrimaryKey">DataGoogleBigqueryTableTableConstraintsPrimaryKey</a>

---


### DataGoogleBigqueryTableTableReplicationInfoList <a name="DataGoogleBigqueryTableTableReplicationInfoList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableReplicationInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get"></a>

```csharp
private DataGoogleBigqueryTableTableReplicationInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTableReplicationInfoOutputReference <a name="DataGoogleBigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTableReplicationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">ReplicationIntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">SourceDatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">SourceProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">SourceTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo">DataGoogleBigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationIntervalMs`<sup>Required</sup> <a name="ReplicationIntervalMs" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```csharp
public double ReplicationIntervalMs { get; }
```

- *Type:* double

---

##### `SourceDatasetId`<sup>Required</sup> <a name="SourceDatasetId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```csharp
public string SourceDatasetId { get; }
```

- *Type:* string

---

##### `SourceProjectId`<sup>Required</sup> <a name="SourceProjectId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```csharp
public string SourceProjectId { get; }
```

- *Type:* string

---

##### `SourceTableId`<sup>Required</sup> <a name="SourceTableId" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```csharp
public string SourceTableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTableReplicationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTableReplicationInfo">DataGoogleBigqueryTableTableReplicationInfo</a>

---


### DataGoogleBigqueryTableTimePartitioningList <a name="DataGoogleBigqueryTableTimePartitioningList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTimePartitioningList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get"></a>

```csharp
private DataGoogleBigqueryTableTimePartitioningOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableTimePartitioningOutputReference <a name="DataGoogleBigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableTimePartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">RequirePartitionFilter</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning">DataGoogleBigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```csharp
public double ExpirationMs { get; }
```

- *Type:* double

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `RequirePartitionFilter`<sup>Required</sup> <a name="RequirePartitionFilter" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```csharp
public IResolvable RequirePartitionFilter { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableTimePartitioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableTimePartitioning">DataGoogleBigqueryTableTimePartitioning</a>

---


### DataGoogleBigqueryTableViewList <a name="DataGoogleBigqueryTableViewList" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableViewList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get"></a>

```csharp
private DataGoogleBigqueryTableViewOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBigqueryTableViewOutputReference <a name="DataGoogleBigqueryTableViewOutputReference" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleBigqueryTableViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.useLegacySql">UseLegacySql</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView">DataGoogleBigqueryTableView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `UseLegacySql`<sup>Required</sup> <a name="UseLegacySql" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.useLegacySql"></a>

```csharp
public IResolvable UseLegacySql { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableViewOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBigqueryTableView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBigqueryTable.DataGoogleBigqueryTableView">DataGoogleBigqueryTableView</a>

---



